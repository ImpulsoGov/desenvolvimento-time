library(readr)
library(dplyr)
library(openxlsx)
obitos <- read.csv("HIST_PAINEL_COVIDBR.csv", 
                                  sep = ";")

obitos <- obitos %>% 
  filter(coduf == 76) %>% 
  select(data, obitosNovos)

write.xlsx(obitos,"obitos.xlsx")
