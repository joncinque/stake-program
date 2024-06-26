/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

import { containsBytes, getU8Encoder, type Address } from '@solana/web3.js';
import {
  type ParsedDeactivateStakeInstruction,
  type ParsedDistributeRewardsInstruction,
  type ParsedHarvestHolderRewardsInstruction,
  type ParsedHarvestStakeRewardsInstruction,
  type ParsedInactivateStakeInstruction,
  type ParsedInitializeConfigInstruction,
  type ParsedInitializeStakeInstruction,
  type ParsedSetAuthorityInstruction,
  type ParsedSlashInstruction,
  type ParsedStakeTokensInstruction,
  type ParsedUpdateConfigInstruction,
  type ParsedWithdrawInactiveStakeInstruction,
} from '../instructions';

export const STAKE_PROGRAM_ADDRESS =
  'PStake1111111111111111111111111111111111111' as Address<'PStake1111111111111111111111111111111111111'>;

export enum StakeAccount {
  Config,
  Stake,
}

export enum StakeInstruction {
  InitializeConfig,
  InitializeStake,
  StakeTokens,
  DeactivateStake,
  InactivateStake,
  WithdrawInactiveStake,
  HarvestHolderRewards,
  HarvestStakeRewards,
  Slash,
  SetAuthority,
  UpdateConfig,
  DistributeRewards,
}

export function identifyStakeInstruction(
  instruction: { data: Uint8Array } | Uint8Array
): StakeInstruction {
  const data =
    instruction instanceof Uint8Array ? instruction : instruction.data;
  if (containsBytes(data, getU8Encoder().encode(0), 0)) {
    return StakeInstruction.InitializeConfig;
  }
  if (containsBytes(data, getU8Encoder().encode(1), 0)) {
    return StakeInstruction.InitializeStake;
  }
  if (containsBytes(data, getU8Encoder().encode(2), 0)) {
    return StakeInstruction.StakeTokens;
  }
  if (containsBytes(data, getU8Encoder().encode(3), 0)) {
    return StakeInstruction.DeactivateStake;
  }
  if (containsBytes(data, getU8Encoder().encode(4), 0)) {
    return StakeInstruction.InactivateStake;
  }
  if (containsBytes(data, getU8Encoder().encode(5), 0)) {
    return StakeInstruction.WithdrawInactiveStake;
  }
  if (containsBytes(data, getU8Encoder().encode(6), 0)) {
    return StakeInstruction.HarvestHolderRewards;
  }
  if (containsBytes(data, getU8Encoder().encode(7), 0)) {
    return StakeInstruction.HarvestStakeRewards;
  }
  if (containsBytes(data, getU8Encoder().encode(8), 0)) {
    return StakeInstruction.Slash;
  }
  if (containsBytes(data, getU8Encoder().encode(9), 0)) {
    return StakeInstruction.SetAuthority;
  }
  if (containsBytes(data, getU8Encoder().encode(10), 0)) {
    return StakeInstruction.UpdateConfig;
  }
  if (containsBytes(data, getU8Encoder().encode(11), 0)) {
    return StakeInstruction.DistributeRewards;
  }
  throw new Error(
    'The provided instruction could not be identified as a stake instruction.'
  );
}

export type ParsedStakeInstruction<
  TProgram extends string = 'PStake1111111111111111111111111111111111111',
> =
  | ({
      instructionType: StakeInstruction.InitializeConfig;
    } & ParsedInitializeConfigInstruction<TProgram>)
  | ({
      instructionType: StakeInstruction.InitializeStake;
    } & ParsedInitializeStakeInstruction<TProgram>)
  | ({
      instructionType: StakeInstruction.StakeTokens;
    } & ParsedStakeTokensInstruction<TProgram>)
  | ({
      instructionType: StakeInstruction.DeactivateStake;
    } & ParsedDeactivateStakeInstruction<TProgram>)
  | ({
      instructionType: StakeInstruction.InactivateStake;
    } & ParsedInactivateStakeInstruction<TProgram>)
  | ({
      instructionType: StakeInstruction.WithdrawInactiveStake;
    } & ParsedWithdrawInactiveStakeInstruction<TProgram>)
  | ({
      instructionType: StakeInstruction.HarvestHolderRewards;
    } & ParsedHarvestHolderRewardsInstruction<TProgram>)
  | ({
      instructionType: StakeInstruction.HarvestStakeRewards;
    } & ParsedHarvestStakeRewardsInstruction<TProgram>)
  | ({
      instructionType: StakeInstruction.Slash;
    } & ParsedSlashInstruction<TProgram>)
  | ({
      instructionType: StakeInstruction.SetAuthority;
    } & ParsedSetAuthorityInstruction<TProgram>)
  | ({
      instructionType: StakeInstruction.UpdateConfig;
    } & ParsedUpdateConfigInstruction<TProgram>)
  | ({
      instructionType: StakeInstruction.DistributeRewards;
    } & ParsedDistributeRewardsInstruction<TProgram>);