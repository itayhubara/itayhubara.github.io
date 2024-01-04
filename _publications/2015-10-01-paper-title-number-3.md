---
title: "Accurate post training quantization with small calibration sets"
collection: publications
permalink: /publication/2015-10-01-paper-title-number-3
excerpt: 'Lately, post-training quantization methods have gained considerable attention, as they are simple to use, and require only a small unlabeled calibration set. This small dataset cannot be used to fine-tune the model without significant over-fitting. Instead, these methods only use the calibration set to set the activations’ dynamic ranges. However, such methods always resulted in significant accuracy degradation, when used below 8-bits (except on small datasets). Here we aim to break the 8-bit barrier. To this end, we minimize the quantization errors of each layer or block separately by optimizing its parameters over the calibration set. We empirically demonstrate that this approach is: (1) much less susceptible to over-fitting than the standard fine-tuning approaches, and can be used even on a very small calibration set; and (2) more powerful than previous methods, which only set the activations’ dynamic ranges. We suggest two flavors for our method, parallel and sequential aim for a fixed and flexible bit-width allocation. For the latter, we demonstrate how to optimally allocate the bit-widths for each layer, while constraining accuracy degradation or model compression by proposing a novel integer programming formulation. Finally, we suggest model global statistics tuning, to correct biases introduced during quantization. Together, these methods yield state-of-the-art results for both vision and text models. For instance, on ResNet50, we obtain less than 1% accuracy degradation — with 4-bit weights and activations in all layers, but first and last. The suggested methods are two orders of magnitude faster than the traditional Quantize Aware Training approach used for lower than 8-bit quantization. We open-sourced our code \textit{https://github.com/itayhubara/CalibTIP}.'
date: 2021-07-01
venue: 'International Conference on Machine Learning'
paperurl: '[link to paper](https://proceedings.mlr.press/v139/hubara21a.html)'
citation:  Itay.H, Yury.N, Yair.H, Ron.B, Daniel.S. (2021). &quot; Accurate post training quantization with small calibration sets.&quot; <i>ICML 2021</i>. 1(3).'
---
This paper is about the number 3. The number 4 is left for future work.

[Download paper here](http://academicpages.github.io/files/paper3.pdf)

Recommended citation: Itay.H, Yury.N, Yair.H, Ron.B, Daniel.S. (2021). "Accurate post training quantization with small calibration sets." <i>ICML 2021</i>. 1(3).
