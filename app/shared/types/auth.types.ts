import { NextPage } from 'next'
import { ReactNode } from 'react';

/** для прописывания в компонентах ProfilePage.isOnlyUser = true, пример в pages\profile.tsx */
export type TypeRoles = { isOnlyAdmin?: boolean; isOnlyUser?: boolean }

/** это расширение типа для подсказки поля isOnlyAdmin */
export type NextPageAuth<P = {}> = NextPage<P> & TypeRoles

// поля для самого AuthProvider
export type TypeComponentAuthFields = { children: ReactNode; Component: TypeRoles };
