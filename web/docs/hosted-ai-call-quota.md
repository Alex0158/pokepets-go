# Hosted AI call quota

Alex / Codex — In progress. Proposal: a shared per-UTC-day maximum count for all hosted OpenAI provider requests, regardless of the guest or feature. Store only UTC day and used-call count in the app database. Before each paid API request, a caller reserves one slot atomically; a failed request still consumes the reservation. The counter is shared by instances and uses the dedicated app database. In hosted mode no valid `POKEPET_HOSTED_OPENAI_CALLS_PER_DAY` means fail closed. Local development is unchanged. This limits request count, not monetary spend; providers, model prices, input sizes and plan budgets still matter. It does not guarantee exactly-once external requests or prevent non-AI database abuse.

No existing AI provider uses this adapter until its owner explicitly integrates it and its own tests verify each actual call reserves a slot. Do not remove hosted AI route guards based on the adapter alone.
