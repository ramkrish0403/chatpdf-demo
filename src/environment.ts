import 'dotenv/config';

type NodeEnv = 'development' | 'production';

const env: Readonly<{
	NODE_ENV: NodeEnv;
	OPENAI_AUTH_KEY: string;
}> = {
	NODE_ENV: (process.env.NODE_ENV as NodeEnv) || 'production',
    OPENAI_AUTH_KEY: process.env.OPENAI_AUTH_KEY || '',
};
process.env.NODE_ENV = env.NODE_ENV;

if (!env.OPENAI_AUTH_KEY) {
    throw new Error('OPENAI_AUTH_KEY is required');
}

export default env;
