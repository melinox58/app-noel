# Étape 1 : Build du frontend Vue.js
FROM node:lts AS frontend-build


WORKDIR /app/front


COPY front/package*.json ./
COPY front/ ./


RUN npm install
RUN npm run build


FROM node:lts


WORKDIR /app


COPY back/package*.json ./back/
COPY back/ ./back/

# Installer les dépendances backend
RUN npm install --prefix back

# Copier les fichiers buildés du frontend vers le backend
COPY --from=frontend-build /app/front/dist ./back/public

# Exposer le port
EXPOSE 3000

# Démarrer le backend
CMD ["node", "back/index.js"]
