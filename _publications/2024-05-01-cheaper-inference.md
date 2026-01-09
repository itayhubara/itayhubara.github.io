---
title: "Towards Cheaper Inference in Deep Networks with Lower Bit-Width Accumulators"
collection: publications
permalink: /publication/2024-05-01-cheaper-inference
excerpt: 'We present a method to train and fine-tune high-end DNNs to utilize cheaper, low-bit accumulators with no significant degradation in accuracy, addressing the computational bottleneck of high-precision accumulation.'
date: 2024-05-01
venue: 'ICLR 2024'
paperurl: 'https://openreview.net/pdf?id=wMbe8fVjgf'
citation: 'Yaniv Blumenfeld, Itay Hubara, Daniel Soudry. (2024). "Towards Cheaper Inference in Deep Networks with Lower Bit-Width Accumulators." <i>ICLR 2024</i>.'
---
The majority of the research on the quantization of Deep Neural Networks (DNNs) is focused on reducing the precision of tensors visible by high-level frameworks (e.g., weights, activations, and gradients). However, current hardware still relies on high-accuracy core operations. Most significant is the operation of accumulating products. This high-precision accumulation operation is gradually becoming the main computational bottleneck. This is because, so far, the usage of low-precision accumulators led to a significant degradation in performance. In this work, we present a simple method to train and fine-tune high-end DNNs, to allow, for the first time, utilization of cheaper, -bits accumulators, with no significant degradation in accuracy. Lastly, we show that as we decrease the accumulation precision further, using fine-grained gradient approximations can improve the DNN accuracy.

[Download paper here](https://openreview.net/pdf?id=wMbe8fVjgf)
