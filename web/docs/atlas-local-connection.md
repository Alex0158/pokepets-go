# Local app with Atlas

This optional mode connects the local-only API to an isolated Atlas database. It does not enable public hosting. The MongoDB Atlas plugin connection is separate from the app connection.

Set `POKEPET_DATABASE_MODE=atlas`, `POKEPET_ATLAS_DATABASE=pokepet_atlas_demo`, and `POKEPET_ATLAS_MONGODB_URI` to the team's credentialed `mongodb+srv` URI through an approved local secret store or ignored environment file. Never commit or share credentials in chat. The database name must start with `pokepet_atlas_`; initialization creates app indexes in that database. Use only a database/user authorized for this project. The current network egress IP must be allowlisted separately.

Start the Next.js app on localhost and verify session and match flows against the isolated database. Atlas access and the required transaction support remain unverified until those checks pass. For the existing local replica set, leave `POKEPET_DATABASE_MODE` unset and continue using `POKEPET_LOCAL_MONGODB_URI` and `POKEPET_LOCAL_DATABASE`.
