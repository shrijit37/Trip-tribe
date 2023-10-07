# Trip Tribe: Travel Itinerary Planning Website

Trip Tribe is a travel itinerary planning website built using Next.js with ChatGPT as the backend for generating travel recommendations. This README will guide you through setting up and running the website.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (v14 or later)
- npm (Node Package Manager)
- Git

## Getting Started

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/trip-tribe.git
   ```

2. Change into the project directory:

   ```bash
   cd trip-tribe
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

**Note:** The repository does not contain the `node_modules` folder, so you need to run `npm install` to fetch all the dependencies listed in the `package.json` file.

## Environment Variables

You'll need to set up a few environment variables for the project to work correctly. Create a `.env.local` file in the project root and add the following variables:

```env
# ChatGPT API endpoint (You'll need a ChatGPT API key)
CHATGPT_API_KEY=your_api_key_here

# Google Maps API key (for mapping functionality)
GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

Replace `your_api_key_here` and `your_google_maps_api_key_here` with your actual API keys.

## Running the Development Server

To start the development server, run the following command:

```bash
npm run dev
```

This will start the Next.js development server. By default, you can access the website at `http://localhost:3000`.

## Building for Production

To build the project for production, use the following command:

```bash
npm run build
```

This will create an optimized production build in the `out` directory.

## Running in Production Mode

To run the project in production mode after building it, use the following command:

```bash
npm start
```

This will start the Next.js server in production mode.

## Contributing

If you'd like to contribute to Trip Tribe, please follow these guidelines:

1. Fork the repository.
2. Contact me at shrijitsrivastav@gmail.com
3. Create a new branch for your feature or bug fix.
4. Make your changes and test thoroughly.
5. Create a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to ChatGPT for providing intelligent travel recommendations.
- Thanks to the Next.js and React communities for their amazing tools and libraries.

Happy traveling with Trip Tribe! 🌍✈️🗺️
