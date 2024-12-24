FROM r-base:latest

     RUN R -e "install.packages(c('ggplot2', 'dplyr', 'tidyverse'), repos='http://cran.rstudio.com/')"

     WORKDIR /usr/src/app

     COPY . .

     CMD ["R"]
