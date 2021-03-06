![Mewtate logo](https://github.com/hackathonismb/Impact-of-viral-protein-sequence-variants-on-protein-domains-and-interfaces/blob/master/mewtate-client/src/mewtate-logo.svg)
# Mewtate - Impact of viral protein sequence variants on protein domains and interfaces
### Project Contributors: Houcemeddine Othman, Sachendra Kumar, Sherlyn Jemimah, Philippe Youkharibache, Xavier Watkins 
## Idea - Tool to evaluate impact of a mutation
* Come up with a simple SNPs variants mutations structural analysis

* Application to ACE2 polymorphism vs. SARS-CoV-2 binding
  * After the identification of an interaction network between 2 sets of residues (general/flexible case) 2 cases can be considered 
    * A mutation disrupts the network << understand the disruptions using a change of residue side chain corresponding to a mutation (for example P>F) sampling rotamers and corresponding clashes/Hbonds etc formed/broken (with local optimization possible)
    * Use coevolving mutations to evolve an interface given a change from one species to another or  a species polymorphism on one protein, adapting its partner
      * Application between bat/pangolin.civet/human in the couple ACE2/SARS-CoV
### What does Mewtate do?

Mewtate is a tool to predict the effect of single amino acid substitution (point mutation) on 3D protein structures. It also allows user to identify mutation hotspot regions by calculating statistically significant cluster of mutations on a 3D protein structure.

### Mewtate Workflow
![data logo](https://github.com/hackathonismb/Impact-of-viral-protein-sequence-variants-on-protein-domains-and-interfaces/blob/master/docs/data.png)
### How to use Mewtate?
![client logo](https://github.com/hackathonismb/Impact-of-viral-protein-sequence-variants-on-protein-domains-and-interfaces/blob/master/docs/client.png)
### Validation
We have used receptor-binding domain (RBD) of the spike protein of SARS-CoV-2 to validate our results. We would extend our study other viral 3D protein structures.


