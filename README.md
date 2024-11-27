# **User Management Dashboard**

A user management system built with **React**, powered by **Vite** for fast development. This dashboard supports adding, editing, viewing, and deleting users, complete with pagination and unique email validation.

---

## **Features**

- Add new users with validations.
- Edit existing users' details.
- View detailed information about a user.
- Delete users.
- Paginated user list (6 users per page, configurable).
- Unique email enforcement.
- Responsive design.

---

## **Technologies Used**

- **Frontend Framework**: React
- **Bundler**: Vite
- **CSS**: Tailwind CSS
- **Notifications**: React Toastify
- **Icons**: Heroicons

---

## **Getting Started**

Follow these instructions to set up and run the project on your local machine.

### **Prerequisites**

Ensure you have the following installed on your machine:

- **Node.js**: Version 14.x or above
- **npm** or **yarn**

---

## **Setup Instructions**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/user-management-dashboard.git
   cd user-management-dashboard
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

4. **Open the Application**:
   Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

5. **Build the Application**:
   For production:
   ```bash
   npm run build
   ```
   Preview the built app:
   ```bash
   npm run preview
   ```

---

## **Configuration**

### **Environment Variables**
This project does not require environment variables by default. However, if you'd like to integrate a backend API or manage secrets, you can create a `.env` file in the root directory.

Example:
```
VITE_API_BASE_URL=https://your-api-url.com
```

---

## **Folder Structure**

```plaintext
src/
├── components/
│   ├── UserCard.jsx        # Displays individual user information
│   ├── UserDetails.jsx     # Shows detailed user information
│   ├── UserForm.jsx        # Form for adding/editing users
│   ├── UserList.jsx        # Paginated list of users
├── context/
│   ├── UserContext.jsx     # Manages user state and operations
├── pages/
│   ├── Dashboard.jsx       # Main page containing user operations
├── main.jsx                # Application entry point
├── App.jsx                 # Root component
tailwind.config.js          # Tailwind CSS configuration
vite.config.js              # Vite configuration
```

---

## **Project Highlights**

### **Pagination**
- Configurable number of users per page (`usersPerPage` in `Dashboard.jsx`).

### **Unique Email Validation**
- Prevents duplicate users by enforcing unique emails in `UserContext.jsx`.

### **Responsive Design**
- Built with **Tailwind CSS**, ensuring mobile-friendly layouts.

### **Development Speed**
- Built with **Vite**, offering lightning-fast HMR (Hot Module Replacement).

---

## **Contributing**

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Commit your changes: `git commit -m "Add some feature"`.
4. Push the branch: `git push origin feature/your-feature-name`.
5. Open a pull request.
