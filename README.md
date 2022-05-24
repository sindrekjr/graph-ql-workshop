# GraphQL Workshop

## Requirements

- [Node.js](https://nodejs.org/)

## Usage

#### 1. Install and run

```bash
$ cd graph-ql-server
$ npm install
$ npm run start:dev
```

#### 2. Go to http://localhost:4000 and play around
Example queries below.

```graphql
query {
  categories {
    id
    products {
      name
    }
  }
}
```

```graphql
query {
  products {
    name id description
  }
}
```

```graphql
query {
  product(id: "c2af9adc-d0b8-4d44-871f-cef66f86f7f6") {
    name
  }
}
```

```graphql
query {
  category(id: "c01b1ff4-f894-4ef2-b27a-22aacc2fca70") {
    id
    products {
      name
    }
  }
}
```

```graphql
query {
  products {
    reviews {
      title
      date
    }
  }
}
```

```graphql
query {
  product(id: "2c931e7e-510f-49e5-aed6-d6b44087e5a1") {
    reviews {
      title
      date
    }
  }
}
```

```graphql
mutation {
  addCategory(input: {
    name: "My Category"
  }) {
    name id
  }
}
```
