/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/kinobi-so/kinobi
 */

/** AmountGreaterThanZero: Amount cannot be greater than zero */
export const PALADIN_STAKE_PROGRAM_ERROR__AMOUNT_GREATER_THAN_ZERO = 0x0; // 0
/** InvalidTokenOwner: Invalid token owner */
export const PALADIN_STAKE_PROGRAM_ERROR__INVALID_TOKEN_OWNER = 0x1; // 1
/** InvalidTransferHookProgramId: Invalid transfer hook program id */
export const PALADIN_STAKE_PROGRAM_ERROR__INVALID_TRANSFER_HOOK_PROGRAM_ID = 0x2; // 2
/** InvalidAccountDataLength: Invalid account data length */
export const PALADIN_STAKE_PROGRAM_ERROR__INVALID_ACCOUNT_DATA_LENGTH = 0x3; // 3
/** InvalidMint: Invalid mint */
export const PALADIN_STAKE_PROGRAM_ERROR__INVALID_MINT = 0x4; // 4
/** MissingTransferHook: Missing transfer hook */
export const PALADIN_STAKE_PROGRAM_ERROR__MISSING_TRANSFER_HOOK = 0x5; // 5
/** CloseAuthorityNotNone: Close authority must be none */
export const PALADIN_STAKE_PROGRAM_ERROR__CLOSE_AUTHORITY_NOT_NONE = 0x6; // 6
/** DelegateNotNone: Delegate must be none */
export const PALADIN_STAKE_PROGRAM_ERROR__DELEGATE_NOT_NONE = 0x7; // 7
/** InvalidTokenAccountExtension: Invalid token account extension */
export const PALADIN_STAKE_PROGRAM_ERROR__INVALID_TOKEN_ACCOUNT_EXTENSION = 0x8; // 8
/** InvalidAuthority: Invalid authority */
export const PALADIN_STAKE_PROGRAM_ERROR__INVALID_AUTHORITY = 0x9; // 9
/** AuthorityNotSet: Authority is not set */
export const PALADIN_STAKE_PROGRAM_ERROR__AUTHORITY_NOT_SET = 0xa; // 10
/** InsufficientStakeAmount: Amount greater than stake amount */
export const PALADIN_STAKE_PROGRAM_ERROR__INSUFFICIENT_STAKE_AMOUNT = 0xb; // 11
/** InvalidAmount: Amount should be greater than 0 */
export const PALADIN_STAKE_PROGRAM_ERROR__INVALID_AMOUNT = 0xc; // 12
/** MaximumDeactivationAmountExceeded: Amount exeeds maximum deactivation amount */
export const PALADIN_STAKE_PROGRAM_ERROR__MAXIMUM_DEACTIVATION_AMOUNT_EXCEEDED = 0xd; // 13
/** ActiveDeactivationCooldown: Active deactivation cooldown */
export const PALADIN_STAKE_PROGRAM_ERROR__ACTIVE_DEACTIVATION_COOLDOWN = 0xe; // 14
/** NoDeactivatedTokens: No deactivated tokens */
export const PALADIN_STAKE_PROGRAM_ERROR__NO_DEACTIVATED_TOKENS = 0xf; // 15
/** IncorrectVaultAccount: Incorrect vault account */
export const PALADIN_STAKE_PROGRAM_ERROR__INCORRECT_VAULT_ACCOUNT = 0x10; // 16
/** NotEnoughInactivatedTokens: Not enough inactivated tokens */
export const PALADIN_STAKE_PROGRAM_ERROR__NOT_ENOUGH_INACTIVATED_TOKENS = 0x11; // 17
/** InvalidDestinationAccount: Invalid destination account */
export const PALADIN_STAKE_PROGRAM_ERROR__INVALID_DESTINATION_ACCOUNT = 0x12; // 18

export type PaladinStakeProgramError =
  | typeof PALADIN_STAKE_PROGRAM_ERROR__ACTIVE_DEACTIVATION_COOLDOWN
  | typeof PALADIN_STAKE_PROGRAM_ERROR__AMOUNT_GREATER_THAN_ZERO
  | typeof PALADIN_STAKE_PROGRAM_ERROR__AUTHORITY_NOT_SET
  | typeof PALADIN_STAKE_PROGRAM_ERROR__CLOSE_AUTHORITY_NOT_NONE
  | typeof PALADIN_STAKE_PROGRAM_ERROR__DELEGATE_NOT_NONE
  | typeof PALADIN_STAKE_PROGRAM_ERROR__INCORRECT_VAULT_ACCOUNT
  | typeof PALADIN_STAKE_PROGRAM_ERROR__INSUFFICIENT_STAKE_AMOUNT
  | typeof PALADIN_STAKE_PROGRAM_ERROR__INVALID_ACCOUNT_DATA_LENGTH
  | typeof PALADIN_STAKE_PROGRAM_ERROR__INVALID_AMOUNT
  | typeof PALADIN_STAKE_PROGRAM_ERROR__INVALID_AUTHORITY
  | typeof PALADIN_STAKE_PROGRAM_ERROR__INVALID_DESTINATION_ACCOUNT
  | typeof PALADIN_STAKE_PROGRAM_ERROR__INVALID_MINT
  | typeof PALADIN_STAKE_PROGRAM_ERROR__INVALID_TOKEN_ACCOUNT_EXTENSION
  | typeof PALADIN_STAKE_PROGRAM_ERROR__INVALID_TOKEN_OWNER
  | typeof PALADIN_STAKE_PROGRAM_ERROR__INVALID_TRANSFER_HOOK_PROGRAM_ID
  | typeof PALADIN_STAKE_PROGRAM_ERROR__MAXIMUM_DEACTIVATION_AMOUNT_EXCEEDED
  | typeof PALADIN_STAKE_PROGRAM_ERROR__MISSING_TRANSFER_HOOK
  | typeof PALADIN_STAKE_PROGRAM_ERROR__NO_DEACTIVATED_TOKENS
  | typeof PALADIN_STAKE_PROGRAM_ERROR__NOT_ENOUGH_INACTIVATED_TOKENS;

let paladinStakeProgramErrorMessages:
  | Record<PaladinStakeProgramError, string>
  | undefined;
if (__DEV__) {
  paladinStakeProgramErrorMessages = {
    [PALADIN_STAKE_PROGRAM_ERROR__ACTIVE_DEACTIVATION_COOLDOWN]: `Active deactivation cooldown`,
    [PALADIN_STAKE_PROGRAM_ERROR__AMOUNT_GREATER_THAN_ZERO]: `Amount cannot be greater than zero`,
    [PALADIN_STAKE_PROGRAM_ERROR__AUTHORITY_NOT_SET]: `Authority is not set`,
    [PALADIN_STAKE_PROGRAM_ERROR__CLOSE_AUTHORITY_NOT_NONE]: `Close authority must be none`,
    [PALADIN_STAKE_PROGRAM_ERROR__DELEGATE_NOT_NONE]: `Delegate must be none`,
    [PALADIN_STAKE_PROGRAM_ERROR__INCORRECT_VAULT_ACCOUNT]: `Incorrect vault account`,
    [PALADIN_STAKE_PROGRAM_ERROR__INSUFFICIENT_STAKE_AMOUNT]: `Amount greater than stake amount`,
    [PALADIN_STAKE_PROGRAM_ERROR__INVALID_ACCOUNT_DATA_LENGTH]: `Invalid account data length`,
    [PALADIN_STAKE_PROGRAM_ERROR__INVALID_AMOUNT]: `Amount should be greater than 0`,
    [PALADIN_STAKE_PROGRAM_ERROR__INVALID_AUTHORITY]: `Invalid authority`,
    [PALADIN_STAKE_PROGRAM_ERROR__INVALID_DESTINATION_ACCOUNT]: `Invalid destination account`,
    [PALADIN_STAKE_PROGRAM_ERROR__INVALID_MINT]: `Invalid mint`,
    [PALADIN_STAKE_PROGRAM_ERROR__INVALID_TOKEN_ACCOUNT_EXTENSION]: `Invalid token account extension`,
    [PALADIN_STAKE_PROGRAM_ERROR__INVALID_TOKEN_OWNER]: `Invalid token owner`,
    [PALADIN_STAKE_PROGRAM_ERROR__INVALID_TRANSFER_HOOK_PROGRAM_ID]: `Invalid transfer hook program id`,
    [PALADIN_STAKE_PROGRAM_ERROR__MAXIMUM_DEACTIVATION_AMOUNT_EXCEEDED]: `Amount exeeds maximum deactivation amount`,
    [PALADIN_STAKE_PROGRAM_ERROR__MISSING_TRANSFER_HOOK]: `Missing transfer hook`,
    [PALADIN_STAKE_PROGRAM_ERROR__NO_DEACTIVATED_TOKENS]: `No deactivated tokens`,
    [PALADIN_STAKE_PROGRAM_ERROR__NOT_ENOUGH_INACTIVATED_TOKENS]: `Not enough inactivated tokens`,
  };
}

export function getPaladinStakeProgramErrorMessage(
  code: PaladinStakeProgramError
): string {
  if (__DEV__) {
    return (
      paladinStakeProgramErrorMessages as Record<
        PaladinStakeProgramError,
        string
      >
    )[code];
  }

  return 'Error message not available in production bundles. Compile with `__DEV__` set to true to see more information.';
}
