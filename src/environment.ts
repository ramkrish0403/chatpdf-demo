import 'dotenv/config';

type NodeEnv = 'development' | 'production';

const env: Readonly<{
	NODE_ENV: NodeEnv;
	OPENAI_API_KEY: string;
}> = {
	NODE_ENV: (process.env.NODE_ENV as NodeEnv) || 'production',
	OPENAI_API_KEY: process.env.OPENAI_API_KEY || '',
};
process.env.NODE_ENV = env.NODE_ENV;

if (!env.OPENAI_API_KEY) {
	throw new Error('OPENAI_AUTH_KEY is required');
}

// delete process.env.OPENAI_API_KEY;
export default env;
