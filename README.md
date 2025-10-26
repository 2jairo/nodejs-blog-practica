<!---BADGE_TESTED-WITH-CYPRESS-->
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
<!--BADGE_CYPRESS-WORKFLOW-OUTCOME-->
![outcome](https://img.shields.io/badge/test-success-green)

# Practica

### Linter Job

- Workflow

![img](./README_imgs/linter.png)

- Resultat en el que vetgem que el linter retorna errors

![img](./README_imgs/linter_fail.png)

- Una volta corregits, vetgem que el linter no retorna errors

![img](./README_imgs/linter_success.png)

### Cypress 

- Workflow

![img](./README_imgs/cypress.png)

- Artifact

![img](./README_imgs/cypress_artifact.png)

- Artifact arxiu

![img](./README_imgs/cypress_result.png)


### Add badge

- Worflow

![img](./README_imgs/add_badge.png)

- Action creada

![img](./README_imgs/add_badge_action.png)
![img](./README_imgs/add_badge_action_js.png)
![img](./README_imgs/add_badge_readme.png)

### Deploy job

- Workflow

![img](./README_imgs/deploy.png)

- El worflow necesita configurar els secrets VERCEL_TOKEN, VERCEL_ORG_ID i VERCEL_PROJECT_ID. Més abaix s'explica com agregar-ho a github. URL: <https://nodejs-blog-practica-12341234123.vercel.app/>

- Per a obtindre els secrets nomenats, ens crearem un conter en <https://vercel.com/>, després, crearem un projecte i obtindrem el PROJECT_ID desde el seguent menu

![alt text](./README_imgs/vercel_create_project.png)
![alt text](./README_imgs/vercel_project_id.png)

- El ORG_ID s'obté de la seguent forma

![alt text](./README_imgs/vercel_org_id1.png)
![alt text](./README_imgs/vercel_org_id2.png)

- El TOKEN s'obté de la seguent forma

![alt text](./README_imgs/vercel_token.png)


# Enviament de notificació

- Workflow

![alt text](./README_imgs/send_mail.png)

- Action creada

![alt text](./README_imgs/send_mail_action.png)


# Secrets

![alt text](./README_imgs/secrets.png)