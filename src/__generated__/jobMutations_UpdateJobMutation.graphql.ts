/**
 * @generated SignedSource<<aff32d23322abd1d9c6322882cd928b1>>
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
export type jobMutations_UpdateJobMutation$variables = {
  id: string;
  input: JobInput;
};
export type jobMutations_UpdateJobMutation$data = {
  readonly updateJob: {
    readonly applicants: number;
    readonly benefits: any;
    readonly createdAt: string;
    readonly description: string;
    readonly id: string;
    readonly skillsRequired: any;
    readonly status: JobStatus;
    readonly title: string;
    readonly type: JobType;
  };
};
export type jobMutations_UpdateJobMutation = {
  response: jobMutations_UpdateJobMutation$data;
  variables: jobMutations_UpdateJobMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
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
        "name": "id",
        "variableName": "id"
      },
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Job",
    "kind": "LinkedField",
    "name": "updateJob",
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
        "name": "skillsRequired",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "benefits",
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
    "name": "jobMutations_UpdateJobMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "jobMutations_UpdateJobMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1429b227d6613e7983d7921416791f3a",
    "id": null,
    "metadata": {},
    "name": "jobMutations_UpdateJobMutation",
    "operationKind": "mutation",
    "text": "mutation jobMutations_UpdateJobMutation(\n  $id: ID!\n  $input: JobInput!\n) {\n  updateJob(id: $id, input: $input) {\n    id\n    title\n    description\n    status\n    type\n    skillsRequired\n    benefits\n    applicants\n    createdAt\n  }\n}\n"
  }
};
})();

(node as any).hash = "93e621021c69defdcf3d50bf6c81fd1e";

export default node;
