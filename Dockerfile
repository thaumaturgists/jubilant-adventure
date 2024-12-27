FROM r-base:latest

# Install the application dependencies
RUN npm install

# Install system dependencies and clean up
RUN apt-get update && apt-get install -y \
    npm \
    && rm -rf /var/lib/apt/lists/*

# Install R packages
RUN R -e "install.packages(c('ggplot2', 'dplyr', 'tidyverse'), repos='http://cran.rstudio.com/')"

# Create a non-root user
RUN useradd -m ruser

# Set the working directory in the container
WORKDIR /usr/src/app/mysubdir

# Copy package.json and package-lock.json to the working directory
COPY mysubdir/package*.json ./

# Copy the rest of the application code to the working directory
COPY mysubdir/. .

# Expose the port the app runs on
EXPOSE 3000

# Switch to the non-root user
USER ruser

# Copy your R scripts or data into the container
COPY --chown=ruser:ruser . .

# Set the entry point
ENTRYPOINT ["sh", "-c", "Rscript app.R & node app.js"]
