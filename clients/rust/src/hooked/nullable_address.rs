use borsh::{BorshDeserialize, BorshSerialize};
use solana_program::pubkey::Pubkey;

#[derive(BorshSerialize, BorshDeserialize, Clone, Debug, Eq, PartialEq)]
#[cfg_attr(feature = "serde", derive(serde::Serialize, serde::Deserialize))]
pub struct NullableAddress(Pubkey);

impl NullableAddress {
    pub fn value(&self) -> Option<Pubkey> {
        if self.0 == Pubkey::default() {
            None
        } else {
            Some(self.0)
        }
    }
}
