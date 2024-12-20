---
title: "Minimum variance unbiased n: M sparsity for the neural gradients"
collection: publications
permalink: /publication/2010-10-01-paper-title-number-2
excerpt: 'In deep learning, fine-grained N:M sparsity reduces the data footprint and bandwidth of a General Matrix multiply (GEMM) up to x2, and doubles throughput by skipping computation of zero values. So far, it was mainly only used to prune weights to accelerate the forward and backward phases. We examine how this method can be used also for the neural gradients (i.e. loss gradients with respect to the intermediate neural layer outputs). To this end, we first establish a tensor-level optimality criteria. Previous works aimed to minimize the mean-square-error (MSE) of each pruned block. We show that while minimization of the MSE works fine for pruning the weights and activations, it catastrophically fails for the neural gradients. Instead, we show that accurate pruning of the neural gradients requires an unbiased minimum-variance pruning mask. We design such specialized masks, and find that in most cases, 1:2 sparsity is sufficient for training, and 2:4 sparsity is usually enough when this is not the case. Further, we suggest combining several such methods together in order to potentially speed up training even more. A reference implementation is supplied in the supplementary material.'
date: 2022-04-16
venue: 'The Eleventh International Conference on Learning Representations'
paperurl: '[link to paper](https://openreview.net/pdf?id=vuD2xEtxZcj)'
citation: 'Brian.C, Itay.H, Ron.B, Daniel.S (2022). &quot; Minimum variance unbiased n: M sparsity for the neural gradient.&quot; <i>ICLR 2022</i>. 1(2).'
---
This paper is about the number 2. The number 3 is left for future work.

[Download paper here]([http://academicpages.github.io/files/paper2.pdf](https://openreview.net/pdf?id=vuD2xEtxZcj))

'Brian.C, Itay.H, Ron.B, Daniel.S (2021). &quot; Minimum variance unbiased n: M sparsity for the neural gradient.&quot; <i>ICLR 2022</i>. 1(2).'
