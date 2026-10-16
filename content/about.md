---
title: "About the workshop"
description: "Scientific motivation, format, and planned outputs."
---

**Dates:** 12–14 May 2027  
**Venue:** NSF NCAR Mesa Laboratory, Boulder, Colorado  
**Size:** approximately 50–80 participants  
**Format:** plenary and contributed talks, a poster session and reception, walk-and-talks, and working groups

## Scientific motivation

Machine learning now produces climate-relevant emulators that are fast, skillful, and increasingly stable in long rollouts; hybrid model components that augment process-based Earth system models; and the first fully differentiable physics-based climate and weather models. Coupled climate modeling, however, sets a stricter standard than matching observed metrics or forecast skill. A coupled system must exchange fluxes and state variables across components, preserve essential budgets, generate credible internal variability, and remain stable over many simulated years. Climate modeling also requires extrapolation beyond the observational record: the model must represent feedbacks and respond physically to forcing.

Current systems demonstrate important pieces of this problem — examples include CAMulator, the ACE2 family, ArchesClimate, LUCIE, Samudra, SamudrACE-style coupled atmosphere–ocean emulation, ICON-ML2, CESM3-MLe, the CliMA project, NeuralGCM, the JAX Circulation Model, and ClimSim/ClimSim-Online parameterization workflows. These are early state-of-the-art demonstrations rather than evidence that coupled hybrid modeling or coupled climate emulation is mature. Most proposed use cases remain ahead of present capability. The workshop therefore aims to define a ladder of evidence, from low-order models through idealized test cases and component emulators to coupled prototypes.

The workshop builds on, and will disseminate, work from the ClimateBench2 project and the meeting held at Ai2 in fall 2026.

## Who should attend

We seek a deliberately balanced mix of climate dynamicists, Earth system model developers, machine learning scientists, research software engineers, and early-career researchers. The program gives visibility to both threads — hybrid ML-physics modeling and climate emulation — without splitting the meeting, and to the shared work at their interface: coupling, diagnostics, software, and test cases.

## Format

- **Plenary and highlight talks** (30 minutes including discussion)
- **Contributed talks** (12 minutes plus 3 minutes of discussion)
- **Poster session** with a dedicated reception
- **Walk-and-talks**, outdoors or indoors, for unstructured exchange
- **Working groups**, each with a chair, a rapporteur, and a defined deliverable

## Planned outputs

{{< outputs >}}

## Background reading

- **CAMulator.** W. E. Chapman, J. S. Schreck, Y. Sha, D. J. Gagne II, D. Kimpara, L. Zanna, K. J. Mayer, and J. Berner, 2025: CAMulator: Fast emulation of the Community Atmosphere Model. [arXiv:2504.06007](https://arxiv.org/abs/2504.06007)
- **ACE2-SOM.** S. K. Clark et al., 2024: ACE2-SOM: Coupling an ML atmospheric emulator to a slab ocean and learning the sensitivity of climate to changed CO<sub>2</sub>. [arXiv:2412.04418](https://arxiv.org/abs/2412.04418)
- **Samudra.** S. Dheeshjith et al., 2024: Samudra: An AI global ocean emulator for climate. [arXiv:2412.03795](https://arxiv.org/abs/2412.03795)
- **SamudrACE.** J. P. C. Duncan et al., 2025: SamudrACE: Fast and accurate coupled climate modeling with 3D ocean and atmosphere emulators. [arXiv:2509.12490](https://arxiv.org/abs/2509.12490)
- **ClimSim and ClimSim-Online.** S. Yu et al.: ClimSim: A large multi-scale dataset for hybrid physics-ML climate emulation. [leap-stc.github.io/ClimSim](https://leap-stc.github.io/ClimSim/)
- **CESM3-MLe.** CESM workshop materials on a machine-learning-enhanced, hybrid physics+ML version of CESM, connected to LEAP, M2LInES, and related efforts. [cesm.ucar.edu](https://www.cesm.ucar.edu/)
- **HybridESM.** T. Beucler and collaborators: HybridESM — a resource list of emerging hybrid Earth system models. [github.com/tbeucler/HybridESM](https://github.com/tbeucler/HybridESM)
