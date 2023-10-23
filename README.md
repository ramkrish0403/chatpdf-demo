# chatpdf-demo

This project demonstrates how to answer questions from a PDF. Follow the instructions below to set up and run the project.

## Prerequisites

1. **Node.js**: Ensure you have Node.js installed. If not, download and install it from [Node.js official website](https://nodejs.org/).

## Installation

1. **Install Dependencies**:
   
   After cloning the repository, navigate to the project directory and install the required npm packages.

   ```bash
   npm install
   ```

2. **Set up the OPENAI_API_KEY**:

   This project requires an API key from OpenAI. Set this key in a `.env` file within the project root directory. Create a new file named `.env` and add the following line:

   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

   ⚠️ **Warning**: Never commit the `.env` file or any other file containing sensitive API keys to the repository. Ensure that `.env` is added to your `.gitignore` file to prevent accidental commits.

3. **Copy Data Files**:

   For the program to answer questions from the PDF, you need to provide the necessary data files. Copy your data files into the following directory:

   ```
   src/modules/llamaindex/data
   ```

## Running the Program

Once you've set up everything, execute the following command from the project directory:

```bash
npx ts-node src/index.ts
```

This will start the program, and you should be able to interact with it and get answers from the provided PDF files.

---