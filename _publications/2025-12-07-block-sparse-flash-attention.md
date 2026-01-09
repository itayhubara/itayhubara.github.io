---
title: "Block Sparse Flash Attention"
collection: publications
permalink: /publication/2025-12-07-block-sparse-flash-attention
excerpt: 'We present Block-Sparse FlashAttention (BSFA), a drop-in replacement that accelerates long-context inference while preserving model quality by addressing the quadratic complexity bottleneck.'
date: 2025-12-07
venue: 'arXiv'
paperurl: 'https://arxiv.org/pdf/2512.07011'
citation: 'Daniel Ohayon, Itay Lamprecht, Itay Hubara, Israel Cohen, Daniel Soudry, Noam Elata. (2025). "Block Sparse Flash Attention." <i>arXiv preprint arXiv:2512.07011</i>.'
---
Modern large language models increasingly require long contexts for reasoning and multi-document tasks, but attention's quadratic complexity creates a severe computational bottleneck. We present Block-Sparse FlashAttention (BSFA), a drop-in replacement that accelerates long-context inference while preserving model quality. Unlike methods that predict importance before computing scores, BSFA computes attention only on important blocks.

[Download paper here](https://arxiv.org/pdf/2512.07011)
