/**
 * @generated SignedSource<<c592747ea33db351a08e183f9080029a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ApplicantTextInput = {
  email: string;
  firstName: string;
  jobId: string;
  lastName: string;
  message?: string | null | undefined;
  phone: string;
};
export type SubmitApplicationMutation$variables = {
  coverLetter: any;
  cv: any;
  input: ApplicantTextInput;
};
export type SubmitApplicationMutation$data = {
  readonly submitApplicationText: {
    readonly coverLetter: string;
    readonly cv: string;
    readonly email: string;
    readonly id: string;
  };
};
export type SubmitApplicationMutation = {
  response: SubmitApplicationMutation$data;
  variables: SubmitApplicationMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "coverLetter"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "cv"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "coverLetter",
        "variableName": "coverLetter"
      },
      {
        "kind": "Variable",
        "name": "cv",
        "variableName": "cv"
      },
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Applicant",
    "kind": "LinkedField",
    "name": "submitApplicationText",
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
        "name": "email",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "cv",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "coverLetter",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SubmitApplicationMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "SubmitApplicationMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "8f38f00a6aee1594e2130a8842c21d36",
    "id": null,
    "metadata": {},
    "name": "SubmitApplicationMutation",
    "operationKind": "mutation",
    "text": "mutation SubmitApplicationMutation(\n  $input: ApplicantTextInput!\n  $cv: Upload!\n  $coverLetter: Upload!\n) {\n  submitApplicationText(input: $input, cv: $cv, coverLetter: $coverLetter) {\n    id\n    email\n    cv\n    coverLetter\n  }\n}\n"
  }
};
})();

(node as any).hash = "f716fb82e4e31164551baf3327f228ab";

export default node;
