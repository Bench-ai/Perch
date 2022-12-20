# Bench

![Perch CI/CD](https://github.com/Bench-ai/Perch/actions/workflows/perch.yml/badge.svg)

## About

Bench.ai will streamline the entire deep learning process from ideation all the way to deployment. 

Our goal is to provide several tools to the user that will make Deep Learning accessible to everyone. 

The outcome allows users of any skill level to utilize Deep Learning.

## Link

This application can be found at http://bench-ai.com

## Features

Our tools will include a drag and drop based neural network builder, graphing tools to track error, training and testing systems, and various deployment tools.

# Project Structure

## Tech Stack

- TypeScript
- React
- Java
- Spring Boot
- MongoDB
- Docker
- AWS

# Development

## Dependencies

- Java v17
- Maven v3.6.3
- Node v18
- Npm v8

## Frontend

### Installation

This application will serve all the UI elements through the `perch-ui` directory.

Before loading static content
```bash
cd perch-ui
```

Using npm install the dependencies
```bash
npm install
```

Using npm start the static content
```bash
npm start
```

## Backend

### Installation

This application will run the entire service through the `perch` directory.

Before running the service
```bash
cd perch
```

Using Maven install the dependencies
```bash
mvn clean install
```

Using Maven we can run the server
```bash
mvn spring-boot:run
```