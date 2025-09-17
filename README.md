# CV Analyzer

A web application designed to streamline the job application process by providing tools for CV analysis, job management, and user authentication. This platform helps users analyze their CVs against job descriptions, save relevant job postings, and manage their application progress.

## Features

*   **CV Analysis**: Upload your CV and analyze its compatibility with specific job descriptions.
*   **Job Management**: Save job postings, track application statuses, and organize your job search.
*   **User Authentication**: Secure user registration and login powered by NextAuth.js.
*   **Dashboard**: A personalized dashboard to view your application overview and insights.
*   **File Upload**: Easy-to-use interface for uploading CVs and other relevant documents.

## Technologies Used

*   **Framework**: Next.js (React)
*   **Language**: TypeScript
*   **Database ORM**: Prisma
*   **Authentication**: NextAuth.js
*   **Styling**: Tailwind CSS
*   **Package Manager**: npm

## Setup Instructions

Follow these steps to get the project up and running on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/cv-analyzer.git
cd cv-analyzer
```

### 2. Install Dependencies

Install the necessary Node.js packages using npm:

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root of the project based on `.env.example` (you might need to create this example file if it doesn't exist). Fill in the required environment variables, such as database connection strings and NextAuth.js secrets.

```
DATABASE_URL="postgresql://user:password@localhost:5432/cv_analyzer_db"
NEXTAUTH_SECRET="YOUR_NEXTAUTH_SECRET"
NEXTAUTH_URL="http://localhost:3000"
# Add any other necessary environment variables here
```

### 4. Database Setup

This project uses Prisma for database management. Apply the database migrations to set up your database schema:

```bash
npx prisma migrate dev --name init
```

If you make changes to `prisma/schema.prisma`, you will need to run `npx prisma migrate dev` again to apply those changes.

### 5. Run the Development Server

Start the Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

*   **Register/Login**: Create an account or log in to access the application's features.
*   **Upload CV**: Navigate to the CV analysis section to upload your CV.
*   **Analyze**: Provide a job description to analyze your CV's suitability.
*   **Manage Jobs**: Explore and save job postings, and update their status in your dashboard.

---