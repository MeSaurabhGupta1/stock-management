# Stock Market Viewer

A React TypeScript web application for viewing and analyzing stock market data with advanced filtering, sorting, and search capabilities.

## Features

- **Real-time Stock Data**: Fetches stock data from BSE Live Feeds API
- **Search**: Search stocks by company name
- **Filtering**: 
  - Filter by minimum current price
  - Filter by minimum percentage change
- **Sorting**: Sort stocks by current price, absolute change, or percentage change (ascending order)
- **Responsive Design**: Built with React-Bootstrap for desktop/laptop view

## Project Structure

```
switchMode/
├── src/
│   ├── components/
│   │   ├── SearchBar.tsx          # Search component
│   │   ├── FilterControls.tsx     # Filter controls component
│   │   ├── SortControls.tsx       # Sort controls component
│   │   ├── StockItem.tsx          # Individual stock card component
│   │   └── StockList.tsx          # List of stocks component
│   ├── services/
│   │   └── stockService.ts        # API service for fetching stocks
│   ├── types/
│   │   └── Stock.ts               # TypeScript interfaces
│   ├── App.tsx                    # Main application component
│   ├── App.css                    # Application styles
│   ├── main.tsx                   # Application entry point
│   └── vite-env.d.ts              # Vite environment types
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Application

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

```bash
npm run build
```

## Technologies Used

- **React 18**: Frontend framework
- **TypeScript**: Type-safe development
- **React-Bootstrap**: UI component library
- **Vite**: Build tool and development server
- **Bootstrap 5**: CSS framework

## Components

### Reusable Components

1. **SearchBar**: Handles stock name search functionality
2. **FilterControls**: Provides filtering options for current price and percentage change
3. **SortControls**: Allows sorting by different stock attributes
4. **StockItem**: Displays individual stock information in a card format
5. **StockList**: Renders the list of stocks with loading and error states

### Main App Component

The `App.tsx` component orchestrates all functionality:
- Fetches stock data from the API
- Manages state for search, filters, and sorting
- Applies filters and sorting using memoization for performance
- Renders the UI layout with sidebar controls and main content area

## API

The application uses the BSE Live Feeds API:
```
http://json.bselivefeeds.indiatimes.com/ET_Community/Gain?pagesize=100
```

## Stock Attributes Displayed

- Company Short Name
- Current Price
- Absolute Change
- Percentage Change
- High Price
- Low Price

## Author

Created as a technical assignment for stock market data visualization.
