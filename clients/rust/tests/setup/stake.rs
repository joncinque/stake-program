use paladin_stake_program_client::{
    accounts::Stake, instructions::InitializeStakeBuilder, pdas::find_stake_pda,
};
use solana_program_test::ProgramTestContext;
use solana_sdk::{
    pubkey::Pubkey, signature::Keypair, signer::Signer, system_instruction,
    transaction::Transaction,
};

use super::vote::create_vote_account;

pub struct StakeManager {
    // Stake account.
    pub stake: Pubkey,
    // Stake authority.
    pub authority: Keypair,
    // Validator account.
    pub validator: Pubkey,
    // Validator vote account.
    pub vote: Pubkey,
}

impl StakeManager {
    pub async fn new(context: &mut ProgramTestContext, config: &Pubkey) -> Self {
        let authority = Keypair::new();
        let validator = Pubkey::new_unique();

        // Creates the validator vote account.

        let vote = create_vote_account(context, &validator, &authority.pubkey()).await;

        // And a stake account.

        let stake = create_stake(context, &vote, config).await;

        let transfer_ix = system_instruction::transfer(
            &context.payer.pubkey(),
            &stake,
            context
                .banks_client
                .get_rent()
                .await
                .unwrap()
                .minimum_balance(Stake::LEN),
        );

        let initialize_ix = InitializeStakeBuilder::new()
            .config(*config)
            .stake(stake)
            .validator_vote(vote)
            .instruction();

        let tx = Transaction::new_signed_with_payer(
            &[transfer_ix, initialize_ix],
            Some(&context.payer.pubkey()),
            &[&context.payer],
            context.last_blockhash,
        );
        context.banks_client.process_transaction(tx).await.unwrap();

        Self {
            stake,
            authority,
            validator,
            vote,
        }
    }
}

pub async fn create_stake(
    context: &mut ProgramTestContext,
    vote: &Pubkey,
    config: &Pubkey,
) -> Pubkey {
    let (stake_pda, _) = find_stake_pda(vote, config);

    let transfer_ix = system_instruction::transfer(
        &context.payer.pubkey(),
        &stake_pda,
        context
            .banks_client
            .get_rent()
            .await
            .unwrap()
            .minimum_balance(Stake::LEN),
    );

    let initialize_ix = InitializeStakeBuilder::new()
        .config(*config)
        .stake(stake_pda)
        .validator_vote(*vote)
        .instruction();

    let tx = Transaction::new_signed_with_payer(
        &[transfer_ix, initialize_ix],
        Some(&context.payer.pubkey()),
        &[&context.payer],
        context.last_blockhash,
    );
    context.banks_client.process_transaction(tx).await.unwrap();

    stake_pda
}
