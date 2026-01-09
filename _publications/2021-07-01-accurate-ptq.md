---
title: "Accurate Post Training Quantization With Small Calibration Sets"
collection: publications
permalink: /publication/2021-07-01-accurate-ptq
excerpt: 'We minimize quantization errors of each layer by optimizing parameters over a small calibration set, breaking the 8-bit barrier for post-training quantization without significant overfitting.'
date: 2021-07-01
venue: 'ICML 2021'
paperurl: 'http://proceedings.mlr.press/v139/hubara21a/hubara21a.pdf'
citation: 'Itay Hubara, Yury Nahshan, Yair Hanani, Ron Banner, Daniel Soudry. (2021). "Accurate Post Training Quantization With Small Calibration Sets." <i>ICML 2021</i>.'
---
Lately, post-training quantization methods have gained considerable attention, as they are simple to use, and require only a small unlabeled calibration set. This small dataset cannot be used to fine-tune the model without significant over-fitting. Instead, these methods only use the calibration set to set the activations’ dynamic ranges. However, such methods always resulted in significant accuracy degradation, when used below 8-bits. Here we aim to break the 8-bit barrier. To this end, we minimize the quantization errors of each layer or block separately by optimizing its parameters over the calibration set.

[Download paper here](http://proceedings.mlr.press/v139/hubara21a/hubara21a.pdf)
