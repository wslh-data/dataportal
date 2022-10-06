---
title: Wisconsin SARS-CoV-2 (hCoV-19) Genomic Dashboard
subtitle: "enabled by data from <a href='https://www.gisaid.org/'><img src='https://www.gisaid.org/fileadmin/gisaid/img/schild.png' alt='GISAID' style='width:100px'></a>"
layout: dashboard_gisaid
dashboard-id: 1
img: sarscov2_virus.jpg
thumbnail: sarscov2_virus.jpg
alt: SARS-CoV-2 Virus
links:
    - name: Variant Search
      address: sc2dashboard-search
    - name: Additional Resources
---

# Sequencing Report
<div style="float:left;width:50%">
    <iframe loading="lazy" height="500" width="100%" frameborder="no" scrolling="no" src="https://data.slhcddcloud.org/seqTotal"><p>Your browser does not support iframes.</p></iframe>
</div>
<div style="float:right;width:50%">
    <iframe loading="lazy" height="500" width="100%" frameborder="no" scrolling="no" src="https://data.slhcddcloud.org/seqTime"><p>Your browser does not support iframes.</p></iframe>
</div>

SARS-CoV-2 genomic sequencing is performed by the [WSLH](https://slh.wisc.edu), the [Centers for Disease Control and Prevention](https://www.cdc.gov/) and variety of Academic, Public Health, and Contract Laboratories. Due to the time it takes for samples to travel to sequencing laboratories and for the resulting data to be released it can take on average <u>2-3 weeks</u> for sequence data to become available after collection from a patient. Additionally, batches of stored samples may be often be sequenced at a later date, which can alter historic data. As a result recent trends should be considered preliminary. Only residual positive viral transport media with sufficient viral load from molecular tests can produce reliable sequence data and all of sequence data represented here are from samples collected in Wisconsin.  

<br>
<br>
# Variant Report
<iframe height="575" width="100%" frameborder="no" scrolling="no" src="https://data.slhcddcloud.org/variants"><p>Your browser does not support iframes.</p></iframe>

The SARS-CoV-2 virus like all viruses continues to change over time. As the virus replicates and makes copies of itself, changes in the genome called mutations are introduced. When a virus emerges with one or more new changes it is referred to as a variant of the original virus. These changes in the virus can sometimes lead to a new variant that is better adapted to its environment, which in turn can result in greater spread of the variant. The process of the virus changing over time and the selection of better adapted variants is called virus evolution.

Enabling communication of viral variants requires a process of naming and classifying the variants. Several methods for SARS-CoV-2 variant classification have been developed but the most widely adopted is the [Pangolin](https://cov-lineages.org/resources/pangolin.html) naming scheme, which provides a dynamic naming approach that can adapt to the evolving virus.

<br>
<br>
# Geographic Report 
<iframe loading="lazy" height="800" width="100%" frameborder="no" scrolling="no" src="https://data.slhcddcloud.org/varGeo"><p>Your browser does not support iframes.</p></iframe>

SARS-CoV-2 genomic sequencing and variant tracking is heavily dependent on clinical testing and the collection and transport of samples for sequencing. Due to these conditions there is a wide variability in the collection and sequencing of samples by geographic region in Wisconsin. The Geographic Report indicates the number of available sequences by County within the selected date range. Darker blue counties represent areas with a larger number of sequences while lighter blue and white counties have a fewer number of sequences. Counties that are colored grey indicate regions where there are no sequences available in given date range.

Pie charts placed over each County indicate the number of each major variant. Hovering over the counties will display the number of sequences available and clicking on the pie charts will show the counts of each major variant.

<br>
<br>

# Additional Resources

- #### [CDC COVID Data Tracker](https://covid.cdc.gov/covid-data-tracker/#variant-proportions)
- #### [Outbreak.info](https://outbreak.info/)
- #### [NextStrain.org](https://nextstrain.org/ncov/gisaid/global/6m)
- #### [CoVariants](https://covariants.org/)
- #### [cov-lineages.org](https://cov-lineages.org/)
