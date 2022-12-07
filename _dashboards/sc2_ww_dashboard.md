---
title: SARS-CoV-2 Wastewater Genomic Dashboard
layout: dashboard
dashboard-id: 2
img: sc2_ww_200Ko.jpg
thumbnail: sc2_ww_200Ko.jpg
alt: SARS-CoV-2 Virus in Wastewater
links:
    - name: Proportion 
    - name: Prevalence
    - name: Map
    - name: More information

---

<iframe loading="lazy" height="50" width="100%" frameborder="no" scrolling="no" src="https://sc2ww.slhcddcloud.org/wwTime/"><p>Your browser does not support iframes.</p></iframe>

# Wastewater surveillance

People infected with COVID-19 can shed the virus (called SARS-CoV-2) in their stool, whether or not they have symptoms. By sampling wastewater throughout Wisconsin, we can assess the level of COVID-19 in the population. Wastewater trends can be found on [Wisconsin DHS](https://www.dhs.wisconsin.gov/covid-19/wastewater.htm) and [CDC](https://covid.cdc.gov/covid-data-tracker/#wastewater-surveillance) wastewater dashboards. In addition, by assessing wastewater samples with a technique called genomic sequencing, we can even identify which COVID-19 variants are circulating in a community. This is important to understand because new variants can spread faster, cause more severe illnesses, and vaccines may not be as effective against them. Thus, public health officials can better protect community members if they know what variants are circulating and where they are spreading. 

To better understand the spread of COVID-19 variants in Wisconsin, the Wisconsin State Laboratory of Hygiene sequences wastewater samples across the state. This project is a collaboration between the Wisconsin Department of Health Services [(WI DHS)](https://www.dhs.wisconsin.gov/), the Wisconsin State Laboratory of Hygiene [(WSLH)](https://slh.wisc.edu/), and the University of Wisconsin-Milwaukee [(UWM)](https://uwm.edu/freshwater/). It is funded by the Centers for Disease Control and Prevention [(CDC)](https://www.cdc.gov/).

<br>

# Interpreting wastewater surveillance data

Traditional surveillance methods for COVID-19 generally rely on positive test results from a clinic or a pharmacy. However, as the pandemic has progressed, fewer people have been getting tested, and more are relying on at-home COVID-19 test kits. Since the results of at-home COVID-19 tests are usually not reported, it has become hard for public health authorities to understand the spread of COVID-19 in a community. By using wastewater surveillance, we can better track the spread of COVID-19, regardless of whether people have symptoms or get tested. Sampling wastewater also allows us to monitor all households and businesses in a sewage district, resulting in a representative snapshot of the whole community. 

The accuracy of wastewater testing is affected by sewershed-specific wastewater characteristics. Hence, the results displayed below must be interpreted with caution. Wastewater surveillance data is useful because it complements other forms of surveillance and provides an independent assessment of the COVID-19 activity in the population.

<br>
<br>

# Proportion 
<iframe loading="lazy" height="500" width="90%" frameborder="no" scrolling="no" src="https://sc2ww.slhcddcloud.org/wwBarplot/"><p>Your browser does not support iframes.</p></iframe>

The Proportion Report displays the relative abundance, or proportion, of the COVID-19 variant groups (described below) over time in wastewater. Variant groups are represented by different colors. The group "Others" includes the variants that were not classified as any of the specific variant groups.

*By default, the chart displays the average relative abundance across all sequenced samples. Use the drop-down menu to limit the view to a specific community. Mouse over the bars to display more information. Each bar reflects a 2-week period of time.*

<br>
<br>

# Prevalence
<iframe loading="lazy" height="600" width="90%" frameborder="no" scrolling="no" src="https://sc2ww.slhcddcloud.org/wwHeatmap/"><p>Your browser does not support iframes.</p></iframe>


The Prevalence Report shows by default only the most abundant COVID-19 variant group over time for each community participating in the wastewater surveillance system. Variant groups are represented by different colors.

*Use the drop-down menu to limit the view to a specific variant group. In the resulting view, the color gradient reflects the relative abundance of the selected variant group in wastewater from 0% to* *100%. Mouse over the chart to reveal more information. Each box reflects 1-week of data.*

<br>
<br>

# Map  
<iframe loading="lazy" height="600" width="90%" frameborder="no" scrolling="no" src="https://sc2ww.slhcddcloud.org/wwMap/"><p>Your browser does not support iframes.</p></iframe>

The Map or Geographic Report displays pie charts reflecting the relative abundance of the COVID-19 variant groups over the monitored communities.

*By default, the current month is displayed. Click on the "play" button to start the animation. Use the drop-down menu to limit the view to a specific variant group. In the resulting view, the circle size is* *proportional to the relative abundance of the selected variant group in wastewater from 0% to 100%. Click over the chart to reveal more information. Data are binned per month.*

<br>
<br>

# More information
The Wisconsin State Laboratory of Hygiene [WSLH](https://slh.wisc.edu/) sequences about 20% of the samples that are tested for routine COVID-19 wastewater surveillance. Only samples with sufficient amounts of virus are sequenced. Large cities and university towns are primarily selected to be sequenced. Rural sewersheds are also monitored to obtain a representative picture of COVID-19 variants circulating in the state.

 [Illumina](https://www.illumina.com/systems/sequencing-platforms/miseq.html) sequencing data are processed through the [viralrecon](https://nf-co.re/viralrecon) workflow. The bioinformatics algorithm [Freyja](https://www.nature.com/articles/s41586-022-05049-6) is used to evaluate the relative proportion of the SARS-CoV-2 lineages present in wastewater samples. Data are manually curated to only display the lineages according to [WHO](https://www.who.int/en/activities/tracking-SARS-CoV-2-variants/) and [Nextstrain](https://clades.nextstrain.org/) nomenclatures. See the [CDC](https://www.cdc.gov/coronavirus/2019-ncov/variants/) website for more information about the current variants of concern and emerging COVID-19 variants.



### COVID-19 variant naming system

Changes in the genetic code of the SARS-CoV-2 virus occur as it spreads through communities. These changes are a natural process. If these changes are favorable to the survival of the virus (e.g., spreads faster, avoids the immune system), they will be passed on to the next generation of the virus. When a virus emerges with one or more new variations, it is referred to as a variant of the original virus.

 The familiar Greek letter scheme for naming the variants of concern (e.g., Alpha, Delta, Omicron) is derived from the World Health Organization [(WHO)](https://www.who.int/activities/tracking-SARS-CoV-2-variants). However, as variants themselves change over time and give rise to new sub-variants, the WHO naming system has not been specific enough to keep good track of those. As a solution, the [Nextstrain](https://nextstrain.org/) naming system (see chart below) keeps the WHO naming categories but also combines variants into more detailed groups based on genetic similarities (also called *clades*). See  [Nextstrain](https://nextstrain.org/) and [CoVariants](https://covariants.org/) for more information.

 Recombinant variants, or the fusion of multiple variants in one, are currently not considered in this analysis. Recombinant variants are recognizable by their name as they start with the letter "X". For example, the Omicron XBB group is not displayed in the charts above.

<br>

<figure>
  <p align="center">
  <img height="600" width="90%" alt="Tree of Nextstrain clades" src="https://raw.githubusercontent.com/nextstrain/ncov-clades-schema/master/clades.svg"/>
</p>
<figcaption>Phylogenetic relationships of Nextstrain SARS-CoV-2 clades (<a href="https://github.com/nextstrain/ncov-clades-schema">source</a>). Credits: <a href="https://nextstrain.org/">Nextstrain</a>.</figcaption>
</figure>



<br>
<br>

# Additional Resources



### Wastewater dashboards

- #### [Wisconsin DHS wastewater dashboard](https://www.dhs.wisconsin.gov/covid-19/wastewater.htm)
- #### [CDC wastewater dashboard](https://covid.cdc.gov/covid-data-tracker/#wastewater-surveillance)

<br>

### Other resources

- #### [CoVariants](https://covariants.org/)
- #### [Outbreak.info](https://outbreak.info/)
- #### [cov-lineages.org](https://cov-lineages.org/)
- #### [covSPECTRUM](https://cov-spectrum.org/explore/United%20States/AllSamples/Past6M/)
- #### [Pangolin](https://cov-lineages.org/resources/pangolin.html)
- #### [Pango Designation](https://github.com/cov-lineages/pango-designation)
- #### [NextStrain.org](https://nextstrain.org/ncov/gisaid/global/6m)
- #### [NextClade.org](https://clades.nextstrain.org/)
