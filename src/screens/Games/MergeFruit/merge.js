import React, { useEffect } from 'react';
import * as PIXI from 'pixi.js';
import blueberry from "./images/level0.png";
import strawberry from "./images/level1.png";
import grapes from "./images/level2.png";
import lemon from "./images/level3.png";

function Merge() {
  useEffect(() => {
    const appWidth = 400;
    const appHeight = window.innerHeight;
    const leftPosition = (window.innerWidth - appWidth) / 2;
    const app = new PIXI.Application({
      background: '#f2c4e5',
      width: appWidth,
      height: appHeight,
      view: document.createElement('canvas'),
    });

    const groundContainer = new PIXI.Container();
    app.stage.addChild(groundContainer);

    const ground = new PIXI.Graphics();
    ground.beginFill(0x63ba20);
    ground.drawRect(0, app.screen.height - 30, appWidth, 40);
    ground.endFill();
    groundContainer.addChild(ground);

    document.body.appendChild(app.view);

    app.view.style.position = 'absolute';
    app.view.style.left = `${leftPosition}px`;

    const sprites = [];
    const fruitImages = [blueberry, strawberry, grapes, lemon];

    function createDropSprite() {
      const randomFruit = Math.floor(Math.random() * fruitImages.length);
      const randomFruitIndex = Math.floor(randomFruit);
      const sprite = PIXI.Sprite.from(fruitImages[randomFruitIndex]);
      

      sprite.anchor.set(0.5);

      if (randomFruitIndex === 0) {
        sprite.width = sprite.height = 20;
        sprite.gravity = 0.05; // Điều chỉnh giá trị theo ý muốn
      } else if (randomFruitIndex === 1) {
        sprite.width = sprite.height = 30;
        sprite.gravity = 0.1; // Điều chỉnh giá trị theo ý muốn
      } else if (randomFruitIndex === 2) {
        sprite.width = sprite.height = 40;
        sprite.gravity = 0.15; // Điều chỉnh giá trị theo ý muốn
      } else if (randomFruitIndex === 3) {
        sprite.width = sprite.height = 55;
        sprite.gravity = 0.2; // Điều chỉnh giá trị theo ý muốn
      }

      sprite.x = app.screen.width / 2;
      sprite.y = 150;

      sprite.interactive = true;
      sprite.isFalling = false;
      sprite.vx = 0;
      sprite.vy = 0;
      sprite.mass = 1;


      app.stage.addChild(sprite);
      sprites.push(sprite);
    }
    createDropSprite();

    app.view.addEventListener('mousemove', (event) => {
      const mouseX = event.clientX - app.view.getBoundingClientRect().left;
      const currentSprite = sprites[sprites.length - 1];
      if (!currentSprite.isFalling) {
        const spriteHalfWidth = currentSprite.width / 2;
        currentSprite.x = Math.max(spriteHalfWidth, Math.min(app.screen.width - spriteHalfWidth, mouseX));
      }
    });

    app.view.addEventListener('mousedown', () => {
      const currentSprite = sprites[sprites.length - 1];
      if (!currentSprite.isFalling) {
        currentSprite.isFalling = true;

        // const originalTargetY = app.screen.height;
        // const extendedDistance = 0.5 * originalTargetY;
        // const targetY = originalTargetY + extendedDistance;
        // const spriteHalfHeight = currentSprite.height / 2;
        // const stopY = app.screen.height - spriteHalfHeight - 30;

        let velocityY = 0;
        const gravity = 0.6;

        function isCollision(spriteA, spriteB) {
          return (
            spriteA.x - spriteA.width / 2 < spriteB.x + spriteB.width / 2 &&
            spriteA.x + spriteA.width / 2 > spriteB.x - spriteB.width / 2 &&
            spriteA.y - spriteA.height / 2 < spriteB.y + spriteB.height / 2 &&
            spriteA.y + spriteA.height / 2 > spriteB.y - spriteB.height / 2
          );
        }

        function handleCollision(spriteA, spriteB) {
          
          const dx = spriteB.x - spriteA.x;
          const dy = spriteB.y - spriteA.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const minDistance = (spriteA.width + spriteB.width) / 2;
        
          if (distance < minDistance) {
            // Check and handle fruit leveling up
            const indexA = fruitImages.indexOf(spriteA.texture.baseTexture.imageUrl);
            const indexB = fruitImages.indexOf(spriteB.texture.baseTexture.imageUrl);
        
            if (indexA >= 0 && indexB >= 0 && indexA === indexB) {
              const higherLevelIndex = indexA + 1;
              const newLevelImage = fruitImages[higherLevelIndex];
        
              if (newLevelImage) {
                // Replace the colliding sprites with the new level sprite
                const newSprite = PIXI.Sprite.from(newLevelImage);
                newSprite.anchor.set(0.5);
                newSprite.width = spriteA.width; // or spriteB.width, they are the same in a collision
                newSprite.height = spriteA.height; // or spriteB.height
                newSprite.x = (spriteA.x + spriteB.x) / 2;
                newSprite.y = (spriteA.y + spriteB.y) / 2;
                newSprite.interactive = true;
                newSprite.isFalling = false;
                newSprite.vx = 0;
                newSprite.vy = 0;
                newSprite.mass = 1;
        
                app.stage.addChild(newSprite);
                sprites.push(newSprite);
        
                // Remove the original colliding sprites from the stage and sprites array
                app.stage.removeChild(spriteA);
                app.stage.removeChild(spriteB);
                sprites.splice(sprites.indexOf(spriteA), 1);
                sprites.splice(sprites.indexOf(spriteB), 1);
              }
            }
          }
        }
        
        

        function animate() {
          velocityY += gravity;
          currentSprite.y += velocityY;
        
          for (let i = 0; i < sprites.length; i++) {
            if (sprites[i] !== currentSprite && isCollision(currentSprite, sprites[i])) {
              handleCollision(currentSprite, sprites[i]);
            }
          }
        
          const spriteHalfHeight = currentSprite.height / 2;
          const stopY = app.screen.height - spriteHalfHeight - 30;
        
          if (currentSprite.y >= stopY) {
            app.ticker.remove(animate);
        
            currentSprite.y = stopY;
        
            let rotationSpeed = 0.02;
            let isRolling = true;
            let rollingOffset = 0;
        
            app.ticker.add((delta) => {
              currentSprite.rotation -= rotationSpeed * delta;
        
              if (isRolling) {
                rollingOffset -= 0.01 * delta;
                const rollingEffect = Math.sin(rollingOffset) * 10;
        
                currentSprite.x += rollingEffect;
        
                rotationSpeed -= 0.003 * delta;
        
                if (rotationSpeed <= 0) {
                  isRolling = false;
                  rotationSpeed = 0;
                }
              }
            });
        
            currentSprite.isFalling = false;
            createDropSprite();
          }
        }
        app.ticker.add(animate);
      }
    });

    return () => {
      app.destroy();
    };
  }, []);

  return (
    <>
      {/* Your JSX content here */}
    </>
  );
}

export default Merge;

