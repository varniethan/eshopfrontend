const z = require("zod");

const userSchema = z.object({
	firstname: z.string().min(1).max(50),
	lastname: z.string().min(1).max(50),
	username: z.string().min(6).max(30),
	phone_number: z.number(),
	address: z.object({
		house_number: z.number().min(1).max(5).nullable(),
		house_name: z.string().min(1).max(50).nullable(),
		street_name: z.string().min(3).max(50),
		town: z.string().min(3).max(50).nullable(),
		postcode: z.string().min(4).max(6),
	}),
	email: z.string().email().min(3).max(320),
	DOB: z.date(),
	created_at: z.date(),
	updated_at: z.date(),
});

module.exports = userSchema