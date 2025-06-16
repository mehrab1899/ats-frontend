import fetch from 'node-fetch';
import {
    getIntrospectionQuery,
    buildClientSchema,
    printSchema,
} from 'graphql';
import fs from 'fs';

const res = await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    },
    body: JSON.stringify({ query: getIntrospectionQuery() }),
});

const { data } = await res.json();
const schema = buildClientSchema(data);
fs.writeFileSync('schema.graphql', printSchema(schema));

console.log('✅ schema.graphql written');
