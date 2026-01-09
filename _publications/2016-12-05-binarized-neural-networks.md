---
title: "Binarized Neural Networks"
collection: publications
permalink: /publication/2016-12-05-binarized-neural-networks
excerpt: 'We introduce Binarized Neural Networks (BNNs) - neural networks with binary weights and activations at run-time. At training-time the binary weights and activations are used for computing the parameter gradients. During the forward pass, BNNs drastically reduce memory size and accesses, and replace most arithmetic operations with bit-wise operations, which is expected to substantially improve power-efficiency.'
date: 2016-12-05
venue: 'NeurIPS 2016'
paperurl: 'https://proceedings.neurips.cc/paper/2016/file/d8330f857a17c53d217014ee776bfd50-Paper.pdf'
citation: 'Itay Hubara, Matthieu Courbariaux, Daniel Soudry, Ran El-Yaniv, Yoshua Bengio. (2016). &quot;Binarized Neural Networks.&quot; <i>NeurIPS 2016</i>.'
---
We introduce Binarized Neural Networks (BNNs) - neural networks with binary weights and activations at run-time. At training-time the binary weights and activations are used for computing the parameter gradients. During the forward pass, BNNs drastically reduce memory size and accesses, and replace most arithmetic operations with bit-wise operations, which is expected to substantially improve power-efficiency. To validate BNNs, we conducted two sets of experiments on the MNIST, CIFAR-10 and SVHN datasets. We achieved near state-of-the-art results with standard torch7-based BNNs, and near state-of-the-art results with Theano-based BNNs. Last but not least, we wrote a binary matrix multiplication GPU kernel with which it is possible to run our MNIST BNN 7 times faster than with an unoptimized GPU kernel, without suffering any loss in classification accuracy.

[Download paper here](https://proceedings.neurips.cc/paper/2016/file/d8330f857a17c53d217014ee776bfd50-Paper.pdf)
