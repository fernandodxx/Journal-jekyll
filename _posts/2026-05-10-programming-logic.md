---
layout: post
title: "Programming Logic"
date: 2026-05-10
description: "The small building blocks behind every program: variables, decisions, loops and functions."
topic: "Fundamentals"
kind: "Study notes"
status: draft
---
> **Draft.** This entry is a work in progress. I'm filling it in as I learn.

## Thinking before typing

Before any framework, there is logic: break a problem into small steps and say each step precisely. These notes use Ruby, but the ideas apply to any language.

## Variables

A variable gives a name to a value so you can use it later.

```ruby
name = "Ada"
age  = 30
```

## Decisions

Conditionals let a program choose a path.

```ruby
if age >= 18
  puts "#{name} can vote"
else
  puts "#{name} cannot vote yet"
end
```

## Repetition

Loops repeat work without repeating code.

```ruby
3.times do |i|
  puts "Step #{i + 1}"
end
```

## Functions

A function packages a behavior behind a name.

```ruby
def greet(person)
  "Hello, #{person}!"
end

puts greet("world")
```

## What's next

- Collections: arrays and hashes
- Breaking bigger problems into smaller functions
- Reading other people's code
