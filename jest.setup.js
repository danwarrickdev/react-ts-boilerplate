import '@testing-library/jest-dom';
import { createSerializer } from '@emotion/jest';
import { TextEncoder, TextDecoder } from 'util';

expect.addSnapshotSerializer(createSerializer());

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
