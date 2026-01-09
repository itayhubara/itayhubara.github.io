---
title: "Minimum Variance Unbiased N:M Sparsity for the Neural Gradients"
collection: publications
permalink: /publication/2023-05-01-min-variance-sparsity
excerpt: 'We examine how N:M sparsity can be used for neural gradients. We show that unlike weights/activations, gradients require an unbiased minimum-variance pruning mask. We design such masks and show 1:2 or 2:4 sparsity works well.'
date: 2023-05-01
venue: 'ICLR 2023'
paperurl: 'https://openreview.net/pdf?id=vuD2xEtxZcj'
citation: 'Brian Chmiel, Itay Hubara, Ron Banner, Daniel Soudry. (2023). "Minimum Variance Unbiased N:M Sparsity for the Neural Gradients." <i>ICLR 2023</i>.'
---
In deep learning, fine-grained N:M sparsity reduces the data footprint and bandwidth of a General Matrix multiply (GEMM) up to x2, and doubles throughput by skipping computation of zero values. So far, it was mainly only used to prune weights to accelerate the forward and backward phases. We examine how this method can be used also for the neural gradients (i.e. loss gradients with respect to the intermediate neural layer outputs). To this end, we first establish a tensor-level optimality criteria. Previous works aimed to minimize the mean-square-error (MSE) of each pruned block. We show that while minimization of the MSE works fine for pruning the weights and activations, it catastrophically fails for the neural gradients. Instead, we show that accurate pruning of the neural gradients requires an unbiased minimum-variance pruning mask. We design such specialized masks, and find that in most cases, 1:2 sparsity is sufficient for training, and 2:4 sparsity is usually enough when this is not the case.

[Download paper here](https://openreview.net/pdf?id=vuD2xEtxZcj)
