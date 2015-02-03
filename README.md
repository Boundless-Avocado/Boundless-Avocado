# Guac Friends

#### Meetup on the Fly

## Team

  - __Product Owner__: [David Ernst](https://github.com/dsernst)
  - __Scrum Master__: [Michael DeLucco](https://github.com/delucco)
  - __Test Champion__: [Peter Kim](https://github.com/p3tuh)

## Table of Contents

1. [Usage](#Usage)
1. [Development](#development)
    1. [Requirements](#requirements)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Configuring API Keys](#configuring-api-keys)
    1. [Running the Server](#running-the-server)
    1. [Roadmap](#roadmap)
1. [Contributing](#contributing)

## Usage

1. Create & join groups for your interests.
2. Invite others to join you.
3. Use GuacFriends to ping everyone in your group when you want to get together.

![ping-friends-instructions](https://cloud.githubusercontent.com/assets/6340841/6011558/1d3f8c98-aaf2-11e4-8feb-f4da42c14bcf.png)

## Development

### Requirements

- Node.js

### Installing Dependencies

From within the root directory:

```sh
npm install
sudo npm install -g bower nodemon
bower install
```

### Configuring API Keys

You'll need API keys to connect to Twilio and Sendgrid. Send us a message for ours or sign up for their free trials. To configure the keys, run these commands from the terminal:

```sh
export TWILIO_ACCOUNT_SID=keyhere;
export TWILIO_AUTH_TOKEN=keyhere;
export SENDGRID_API_USER=keyhere;
export SENDGRID_API_KEY=keyhere;
```

### Running the Server

From within the root directory:

```sh
nodemon
```

It should now be accessible at `http://localhost:8080`.

### Roadmap

View our feature wishlist [here](https://github.com/Boundless-Avocado/Boundless-Avocado/wiki/Feature-Wishlist).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
