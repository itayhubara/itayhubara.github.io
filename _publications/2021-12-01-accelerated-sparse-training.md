---
title: "Accelerated Sparse Neural Training: A Provable and Efficient Method to Find N:M Transposable Masks"
collection: publications
permalink: /publication/2021-12-01-accelerated-sparse-training
excerpt: 'We suggest a novel transposable fine-grained sparsity mask for N:M sparsity, allowing acceleration of both forward and backward passes. We formulate finding the optimal mask as a min-cost flow problem.'
date: 2021-12-01
venue: 'NeurIPS 2021'
paperurl: 'https://proceedings.neurips.cc/paper/2021/file/b0490b85e92b64dbb5db76bf8fca6a82-Paper.pdf'
citation: 'Itay Hubara, Brian Chmiel, Moshe Island, Ron Banner, Joseph Naor, Daniel Soudry. (2021). "Accelerated Sparse Neural Training: A Provable and Efficient Method to Find N:M Transposable Masks." <i>NeurIPS 2021</i>.'
---
Unstructured pruning reduces the memory footprint in deep neural networks (DNNs). Recently, researchers proposed different types of structural pruning intending to reduce also the computation complexity. In this work, we first suggest a new measure called mask-diversity which correlates with the expected accuracy of the different types of structural pruning. We focus on the recently suggested N:M fine-grained block sparsity mask, in which for each block of M weights, we have at least N zeros. While N:M fine-grained block sparsity allows acceleration in actual modern hardware, it can be used only to accelerate the inference phase. In order to allow for similar accelerations in the training phase, we suggest a novel transposable fine-grained sparsity mask, where the same mask can be used for both forward and backward passes.

[Download paper here](https://proceedings.neurips.cc/paper/2021/file/b0490b85e92b64dbb5db76bf8fca6a82-Paper.pdf)
