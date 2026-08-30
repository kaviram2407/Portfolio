# Kaviram Paramasivan — Portfolio

## Overview

Personal portfolio website designed as an interactive Data Engineering Command Center, detailing conformed data pipelines, cloud data platforms, system architecture blueprints, and Retrieval-Augmented Generation (RAG) assistant pipelines.

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- GSAP
- Three.js / Canvas
- Lucide React

## Featured Projects

### StarAir Airline Data Platform
An aviation-focused Medallion lakehouse processing airline transactions, flight profiles, sales, and carrier logs. Orchestrated with Azure Data Factory and Databricks PySpark to ingest 22 tables, enforce data quality rules, and implement historical SCD Type 1 & 2 tracking into Gold dimensional semantic star schemas connected to Power BI DirectQuery.

### AI RFP / Proposal Assistant
A self-initiated Retrieval-Augmented Generation (RAG) assistant designed to parse layouts and metadata from massive proposal PDFs using PyMuPDF, calculate 1536-dimensional embeddings with Azure OpenAI, store and index vectors using PostgreSQL and pgvector, and generate sourced citations through LLM context merges.

## Key Engineering Areas

- Data Engineering
- Azure
- Databricks
- PySpark
- Delta Lake
- Microsoft Fabric
- SQL
- Python
- AI / GenAI
- RAG

## Local Development

Ensure dependencies are installed and run the development server:

```bash
npm install
npm run dev
```

## Build

Compile the Next.js production build using Webpack:

```bash
npm run build -- --webpack
```
