---
layout: post
title: "Ruby on Rails: My Learning Notes"
date: 2026-02-14
description: "A running log of what I'm learning while building with Ruby on Rails."
topic: "Ruby / Rails"
kind: "Learning log"
status: draft
---

> **Draft.** This entry is a work in progress. I'm filling it in as I learn.

## Why I'm keeping notes

Writing things down is the fastest way I know to find out what I actually understood. This page collects short, honest notes about Rails: what clicked, what didn't, and what I want to revisit.

## The mental model

Rails organizes an application around three ideas:

- **Models** hold data and business rules.
- **Views** render what the person sees.
- **Controllers** connect requests to models and views.

## Notes so far

### Routes

Routes map a URL to a controller action. One line can describe a whole set of them:

```ruby
# config/routes.rb
Rails.application.routes.draw do
  resources :posts
end
```

### Migrations

Migrations describe changes to the database in Ruby, so the schema evolves together with the code.

```ruby
class CreatePosts < ActiveRecord::Migration[7.1]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.text   :body
      t.timestamps
    end
  end
end
```

## What's next

- Validations and callbacks
- Testing with the built-in tools
- Deploying a small app end to end
