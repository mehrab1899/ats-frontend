/**
 * @generated SignedSource<<4fcfc5530c9986f9e758058337a0ff61>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type JobStatus = "CLOSED" | "DRAFT" | "OPEN" | "%future added value";
export type JobType = "CONTRACT" | "FULL_TIME" | "PART_TIME" | "%future added value";
export type JobInput = {
  benefits: any;
  description: string;
  skillsRequired: any;
  status?: JobStatus | null | undefined;
  title: string;
  type?: JobType | null | undefined;
};
export type jobMutations_CreateJobMutation$variables = {
  input: JobInput;
};
export type jobMutations_CreateJobMutation$data = {
  readonly createJob: {
    readonly applicants: number;
    readonly createdAt: string;
    readonly description: string;
    readonly id: string;
    readonly status: JobStatus;
    readonly title: string;
    readonly type: JobType;
  };
};
export type jobMutations_CreateJobMutation = {
  response: jobMutations_CreateJobMutation$data;
  variables: jobMutations_CreateJobMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Job",
    "kind": "LinkedField",
    "name": "createJob",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "status",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "type",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "applicants",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAt",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "jobMutations_CreateJobMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "jobMutations_CreateJobMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d227b087fb242dbac661df6baf31a72d",
    "id": null,
    "metadata": {},
    "name": "jobMutations_CreateJobMutation",
    "operationKind": "mutation",
    "text": "mutation jobMutations_CreateJobMutation(\n  $input: JobInput!\n) {\n  createJob(input: $input) {\n    id\n    title\n    description\n    status\n    type\n    applicants\n    createdAt\n  }\n}\n"
  }
};
})();

(node as any).hash = "0881b206164d1ea6dcc60dbf60f897db";

export default node;
