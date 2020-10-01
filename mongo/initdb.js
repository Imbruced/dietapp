db.createUser(
    {
        user: "diet_admin",
        pwd: "diet",
        roles: [
            {
                role: "readWrite",
                db: "diet_db"
            }
        ]
    }
)