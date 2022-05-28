#!/usr/bin/env node
import 'source-map-support/register';
// import * as cdk from '@aws-cdk/core';
// import { Construct } from 'constructs';
import { App, StackProps } from 'aws-cdk-lib'; 

import { ServerlessStack } from './stack/serverless-stack';

import { loadConfig } from '../lib/utils/config-loaders';

let appConfig: any = loadConfig('config/app-config-demo.json');

const stackProps: StackProps = { 
    env: {
        account: appConfig.Project.Account,
        region: appConfig.Project.Region
    }
};
const projectPrefix = `${appConfig.Project.Name}${appConfig.Project.Stage}`

const app = new App();

new ServerlessStack(app, `${projectPrefix}-ServerlessStack`, stackProps);