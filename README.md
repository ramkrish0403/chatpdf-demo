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

2. **Copy Data Files**:

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