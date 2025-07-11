# Recommendation MVP App

Browse blog posts and products, and view their details. All content is hosted and fetched from Contentful CMS. Items in the list support pagination and are automatically fetched when the 10th item is scrolled into view. Clicking on an item opens a details page showing either the blog post or product information.


https://github.com/user-attachments/assets/2ca252da-cb8f-4373-bd24-082fcbf98f64


---

## 🛠 Stack

- **Framework**: React Native (Expo)
- **Language**: TypeScript
- **Navigation**: React Navigation
- **CMS**: Contentful CMS
- **Network calls**: Tanstack React Query: Provides an easy-to-use API that handles data fetching, updating, and caching data. It simplifies displaying and obtaining error and loading states with its hooks, reducing boilerplate and improving performance through caching, data fetch updates, and validation.
- **Dev Tools**: ESLint, Prettier, Husky, Lint-staged

---

## 🚀 How to Run

1. Copy the provided `.env.example` file and rename it to `.env`:

   ```bash
   cp .env.example .env
   ```

2. Fill in the required values:

   ```env
   CONTENTFUL_SPACE_ID=your_space_id_here
   CONTENTFUL_ACCESS_TOKEN=your_access_token_here
   ```

   > These values will be provided separately. Make sure not to commit the `.env` file to version control.

3. Install dependencies:

   ```bash
   yarn install
   ```

4. Start the app:
   ```bash
   npx expo start
   ```

---

## 🧪 Run Tests

```bash
yarn test
```

---

## 🧩 Task Breakdown

Here’s how I approached building this MVP:

- Understood the requirements and planned an initial design and flow for the two screens.
- Searched for a CMS to host and serve the content.
- Explored the CMS responses to understand the data shape.
- Used one of my [starter templates](https://github.com/chefk5/rn-expo-ts-boilerplate), which includes preconfigured libraries and tools such as Husky, ESLint, Prettier, and lint-staged.
- Set up React Navigation.
- Built the UI for all screens using mocked data first.
- Integrated the CMS API with both screens.
- Added improvements like error handling, toast messages, and minor UI fixes.
- Tested the app and fixed bugs found during testing.
- Cleaned up code and did a code review.
- Added some basic tests.
- Prepared this README.

---

## 🤔 Why Contentful?

I chose Contentful CMS because:

- It was quick to set up.
- It offers a REST API that fits the project’s needs.
- It's not overly complex and has solid documentation and support.
