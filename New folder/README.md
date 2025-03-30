# Unknown Cabs - Ride Sharing Platform

## Project Overview
Unknown Cabs is a comprehensive ride-sharing platform that offers multiple services including ride booking, rentals, parcel delivery, food delivery, community features, and ticket booking. The platform is designed with a modern, responsive UI and follows best practices for user experience.

## Features

### Core Services
1. **Ride Booking**
   - Real-time ride booking interface
   - Location input with pickup and drop-off points
   - Multiple ride options (Auto, Mini, Prime Sedan, Prime SUV)
   - Estimated wait times
   - Map integration support

2. **Vehicle Rentals**
   - Car and bike rental options
   - Flexible duration booking
   - All-inclusive pricing
   - Insurance coverage
   - Fuel included options

3. **Parcel Delivery**
   - Package delivery service
   - Real-time tracking capability
   - Multiple package size options

4. **Food Delivery**
   - Restaurant integration
   - Real-time order tracking
   - Multiple restaurant options
   - Delivery time estimates

5. **Community Features**
   - User ratings and reviews
   - Driver-rider matching
   - Favorite drivers list
   - Community guidelines

6. **Ticket Booking**
   - Event ticket integration
   - Multiple payment options
   - E-ticket generation

### Additional Features
1. **User Profile Management**
   - User authentication
   - Profile customization
   - Ride history
   - Saved locations

2. **Safety Features**
   - Emergency SOS button
   - Kids & Women safety mode
   - Real-time location sharing
   - Emergency contact management

3. **Payment Integration**
   - Wallet system
   - Multiple payment methods
   - Transaction history
   - Auto-payment options

4. **AI Chatbot Support**
   - 24/7 customer support
   - Quick response system
   - Common queries handling
   - Live chat functionality

## Technical Implementation

### Frontend Architecture
- **HTML5** structure with semantic elements
- **CSS3** with modern features:
  - Flexbox and Grid layouts
  - CSS Variables
  - Transitions and Animations
  - Responsive Design
  - Glass-morphism effects
- **JavaScript** functionality:
  - ES6+ features
  - Event handling
  - DOM manipulation
  - Async operations

### Required Backend APIs

#### 1. User Management
```javascript
POST /api/v1/auth/register
POST /api/v1/auth/login
GET /api/v1/user/profile
PUT /api/v1/user/profile
POST /api/v1/auth/logout
```

#### 2. Ride Services
```javascript
POST /api/v1/rides/book
GET /api/v1/rides/available
GET /api/v1/rides/estimate
POST /api/v1/rides/cancel
GET /api/v1/rides/history
```

#### 3. Rental Services
```javascript
GET /api/v1/rentals/vehicles
POST /api/v1/rentals/book
GET /api/v1/rentals/availability
POST /api/v1/rentals/cancel
```

#### 4. Parcel Services
```javascript
POST /api/v1/parcels/create
GET /api/v1/parcels/track
PUT /api/v1/parcels/update
GET /api/v1/parcels/pricing
```

#### 5. Food Delivery
```javascript
GET /api/v1/food/restaurants
GET /api/v1/food/menu
POST /api/v1/food/order
GET /api/v1/food/track
```

#### 6. Payment System
```javascript
POST /api/v1/payments/process
GET /api/v1/payments/history
POST /api/v1/wallet/add
GET /api/v1/wallet/balance
```

#### 7. Safety Features
```javascript
POST /api/v1/safety/sos
POST /api/v1/safety/share-location
PUT /api/v1/safety/emergency-contacts
GET /api/v1/safety/safe-zones
```

### Database Schema Requirements

#### Users Table
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    password_hash VARCHAR(255),
    full_name VARCHAR(255),
    phone VARCHAR(20),
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);
```

#### Rides Table
```sql
CREATE TABLE rides (
    id UUID PRIMARY KEY,
    user_id UUID,
    driver_id UUID,
    pickup_location JSONB,
    dropoff_location JSONB,
    status VARCHAR(50),
    price DECIMAL(10,2),
    created_at TIMESTAMP,
    completed_at TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (driver_id) REFERENCES drivers(id)
);
```

#### Wallet Table
```sql
CREATE TABLE wallets (
    id UUID PRIMARY KEY,
    user_id UUID,
    balance DECIMAL(10,2),
    last_transaction_at TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

## Security Requirements
1. JWT Authentication
2. Password Hashing
3. Rate Limiting
4. Input Validation
5. XSS Protection
6. CSRF Protection
7. SQL Injection Prevention
8. API Key Management

## External Service Integrations
1. Payment Gateway (Stripe/PayPal)
2. Maps API (Google Maps/Mapbox)
3. SMS Gateway
4. Email Service
5. Push Notification Service
6. Real-time Location Tracking
7. Chat Service

## Deployment Requirements
- Node.js v14+ for backend
- PostgreSQL/MySQL for database
- Redis for caching
- WebSocket support for real-time features
- SSL/TLS certification
- CDN for static assets
- Load balancer configuration
- Docker support

## Environment Variables
```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=unknown_cabs
DB_USER=postgres
DB_PASSWORD=secret

# JWT Configuration
JWT_SECRET=your_jwt_secret
JWT_EXPIRY=24h

# External Services
GOOGLE_MAPS_API_KEY=your_api_key
STRIPE_SECRET_KEY=your_stripe_key
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_pass

# Redis Configuration
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=secret
```

## Getting Started for Backend Development

1. Clone the repository
```bash
git clone https://github.com/yourusername/unknown-cabs.git
cd unknown-cabs
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Set up the database
```bash
npm run migrate
npm run seed
```

5. Start development server
```bash
npm run dev
```

## API Documentation
- Swagger documentation available at `/api-docs`
- Postman collection available in `/docs/postman`
- API versioning using `/api/v1/`

## Testing
```bash
# Run unit tests
npm run test

# Run integration tests
npm run test:integration

# Run e2e tests
npm run test:e2e
```

## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details 