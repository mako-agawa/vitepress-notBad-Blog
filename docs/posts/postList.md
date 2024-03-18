---
theme: page
title: ブログ記事一覧
next: false
prev: false
date: 2023/10/03
---

<script setup>
import { data as posts } from '../theme/posts.data.ts'
</script>

# ブログ記事一覧

<br/>

<ul>
    <li v-for="post of posts">  
     <a :href="'/vitepress-notBad-Blog' + post.url" class="home-posts-article-title">{{post.frontmatter.title}}</a>
    </li>
</ul>