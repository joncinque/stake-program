/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import {
  combineCodec,
  getStructDecoder,
  getStructEncoder,
  getU8Decoder,
  getU8Encoder,
  transformEncoder,
  type Address,
  type Codec,
  type Decoder,
  type Encoder,
  type IAccountMeta,
  type IInstruction,
  type IInstructionWithAccounts,
  type IInstructionWithData,
  type ReadonlyAccount,
  type WritableAccount,
} from '@solana/web3.js';
import { PALADIN_STAKE_PROGRAM_PROGRAM_ADDRESS } from '../programs';
import { getAccountMetaFactory, type ResolvedAccount } from '../shared';

export type SyncSolStakeInstruction<
  TProgram extends string = typeof PALADIN_STAKE_PROGRAM_PROGRAM_ADDRESS,
  TAccountConfig extends string | IAccountMeta<string> = string,
  TAccountSolStakerStake extends string | IAccountMeta<string> = string,
  TAccountValidatorStake extends string | IAccountMeta<string> = string,
  TAccountSolStake extends string | IAccountMeta<string> = string,
  TAccountSysvarStakeHistory extends
    | string
    | IAccountMeta<string> = 'SysvarStakeHistory1111111111111111111111111',
  TAccountSolStakeViewProgram extends string | IAccountMeta<string> = string,
  TRemainingAccounts extends readonly IAccountMeta<string>[] = [],
> = IInstruction<TProgram> &
  IInstructionWithData<Uint8Array> &
  IInstructionWithAccounts<
    [
      TAccountConfig extends string
        ? ReadonlyAccount<TAccountConfig>
        : TAccountConfig,
      TAccountSolStakerStake extends string
        ? WritableAccount<TAccountSolStakerStake>
        : TAccountSolStakerStake,
      TAccountValidatorStake extends string
        ? WritableAccount<TAccountValidatorStake>
        : TAccountValidatorStake,
      TAccountSolStake extends string
        ? ReadonlyAccount<TAccountSolStake>
        : TAccountSolStake,
      TAccountSysvarStakeHistory extends string
        ? ReadonlyAccount<TAccountSysvarStakeHistory>
        : TAccountSysvarStakeHistory,
      TAccountSolStakeViewProgram extends string
        ? ReadonlyAccount<TAccountSolStakeViewProgram>
        : TAccountSolStakeViewProgram,
      ...TRemainingAccounts,
    ]
  >;

export type SyncSolStakeInstructionData = { discriminator: number };

export type SyncSolStakeInstructionDataArgs = {};

export function getSyncSolStakeInstructionDataEncoder(): Encoder<SyncSolStakeInstructionDataArgs> {
  return transformEncoder(
    getStructEncoder([['discriminator', getU8Encoder()]]),
    (value) => ({ ...value, discriminator: 14 })
  );
}

export function getSyncSolStakeInstructionDataDecoder(): Decoder<SyncSolStakeInstructionData> {
  return getStructDecoder([['discriminator', getU8Decoder()]]);
}

export function getSyncSolStakeInstructionDataCodec(): Codec<
  SyncSolStakeInstructionDataArgs,
  SyncSolStakeInstructionData
> {
  return combineCodec(
    getSyncSolStakeInstructionDataEncoder(),
    getSyncSolStakeInstructionDataDecoder()
  );
}

export type SyncSolStakeInput<
  TAccountConfig extends string = string,
  TAccountSolStakerStake extends string = string,
  TAccountValidatorStake extends string = string,
  TAccountSolStake extends string = string,
  TAccountSysvarStakeHistory extends string = string,
  TAccountSolStakeViewProgram extends string = string,
> = {
  /** Stake config account */
  config: Address<TAccountConfig>;
  /** SOL staker stake account (pda of `['stake::state::sol_staker_stake', stake state, config]`) */
  solStakerStake: Address<TAccountSolStakerStake>;
  /** Validator stake account (pda of `['stake::state::validator_stake', validator, config]`) */
  validatorStake: Address<TAccountValidatorStake>;
  /** SOL stake account */
  solStake: Address<TAccountSolStake>;
  /** Stake history sysvar */
  sysvarStakeHistory?: Address<TAccountSysvarStakeHistory>;
  /** Paladin SOL Stake View program */
  solStakeViewProgram: Address<TAccountSolStakeViewProgram>;
};

export function getSyncSolStakeInstruction<
  TAccountConfig extends string,
  TAccountSolStakerStake extends string,
  TAccountValidatorStake extends string,
  TAccountSolStake extends string,
  TAccountSysvarStakeHistory extends string,
  TAccountSolStakeViewProgram extends string,
>(
  input: SyncSolStakeInput<
    TAccountConfig,
    TAccountSolStakerStake,
    TAccountValidatorStake,
    TAccountSolStake,
    TAccountSysvarStakeHistory,
    TAccountSolStakeViewProgram
  >
): SyncSolStakeInstruction<
  typeof PALADIN_STAKE_PROGRAM_PROGRAM_ADDRESS,
  TAccountConfig,
  TAccountSolStakerStake,
  TAccountValidatorStake,
  TAccountSolStake,
  TAccountSysvarStakeHistory,
  TAccountSolStakeViewProgram
> {
  // Program address.
  const programAddress = PALADIN_STAKE_PROGRAM_PROGRAM_ADDRESS;

  // Original accounts.
  const originalAccounts = {
    config: { value: input.config ?? null, isWritable: false },
    solStakerStake: { value: input.solStakerStake ?? null, isWritable: true },
    validatorStake: { value: input.validatorStake ?? null, isWritable: true },
    solStake: { value: input.solStake ?? null, isWritable: false },
    sysvarStakeHistory: {
      value: input.sysvarStakeHistory ?? null,
      isWritable: false,
    },
    solStakeViewProgram: {
      value: input.solStakeViewProgram ?? null,
      isWritable: false,
    },
  };
  const accounts = originalAccounts as Record<
    keyof typeof originalAccounts,
    ResolvedAccount
  >;

  // Resolve default values.
  if (!accounts.sysvarStakeHistory.value) {
    accounts.sysvarStakeHistory.value =
      'SysvarStakeHistory1111111111111111111111111' as Address<'SysvarStakeHistory1111111111111111111111111'>;
  }

  const getAccountMeta = getAccountMetaFactory(programAddress, 'programId');
  const instruction = {
    accounts: [
      getAccountMeta(accounts.config),
      getAccountMeta(accounts.solStakerStake),
      getAccountMeta(accounts.validatorStake),
      getAccountMeta(accounts.solStake),
      getAccountMeta(accounts.sysvarStakeHistory),
      getAccountMeta(accounts.solStakeViewProgram),
    ],
    programAddress,
    data: getSyncSolStakeInstructionDataEncoder().encode({}),
  } as SyncSolStakeInstruction<
    typeof PALADIN_STAKE_PROGRAM_PROGRAM_ADDRESS,
    TAccountConfig,
    TAccountSolStakerStake,
    TAccountValidatorStake,
    TAccountSolStake,
    TAccountSysvarStakeHistory,
    TAccountSolStakeViewProgram
  >;

  return instruction;
}

export type ParsedSyncSolStakeInstruction<
  TProgram extends string = typeof PALADIN_STAKE_PROGRAM_PROGRAM_ADDRESS,
  TAccountMetas extends readonly IAccountMeta[] = readonly IAccountMeta[],
> = {
  programAddress: Address<TProgram>;
  accounts: {
    /** Stake config account */
    config: TAccountMetas[0];
    /** SOL staker stake account (pda of `['stake::state::sol_staker_stake', stake state, config]`) */
    solStakerStake: TAccountMetas[1];
    /** Validator stake account (pda of `['stake::state::validator_stake', validator, config]`) */
    validatorStake: TAccountMetas[2];
    /** SOL stake account */
    solStake: TAccountMetas[3];
    /** Stake history sysvar */
    sysvarStakeHistory: TAccountMetas[4];
    /** Paladin SOL Stake View program */
    solStakeViewProgram: TAccountMetas[5];
  };
  data: SyncSolStakeInstructionData;
};

export function parseSyncSolStakeInstruction<
  TProgram extends string,
  TAccountMetas extends readonly IAccountMeta[],
>(
  instruction: IInstruction<TProgram> &
    IInstructionWithAccounts<TAccountMetas> &
    IInstructionWithData<Uint8Array>
): ParsedSyncSolStakeInstruction<TProgram, TAccountMetas> {
  if (instruction.accounts.length < 6) {
    // TODO: Coded error.
    throw new Error('Not enough accounts');
  }
  let accountIndex = 0;
  const getNextAccount = () => {
    const accountMeta = instruction.accounts![accountIndex]!;
    accountIndex += 1;
    return accountMeta;
  };
  return {
    programAddress: instruction.programAddress,
    accounts: {
      config: getNextAccount(),
      solStakerStake: getNextAccount(),
      validatorStake: getNextAccount(),
      solStake: getNextAccount(),
      sysvarStakeHistory: getNextAccount(),
      solStakeViewProgram: getNextAccount(),
    },
    data: getSyncSolStakeInstructionDataDecoder().decode(instruction.data),
  };
}