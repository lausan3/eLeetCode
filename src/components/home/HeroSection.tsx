'use client';

import { Button, Card, CardBody, Link } from '@nextui-org/react';

export default function HeroSection() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-algo-beige-primary dark:bg-algo-gray text-center">
      <Card className="mx-auto max-w-2xl border-none bg-transparent p-8 shadow-none">
        <CardBody>
          <h1 className="mb-4 text-4xl font-bold text-heading dark:text-white">
            Effortlessly synchronize your solutions to GitHub with
            <span className="bg-gradient-to-r bg-clip-text text-transparent
            from-algo-gradient-yellow-1 to-algo-gradient-yellow-2 
            dark:from-algo-gradient-yellow-1-dark dark:to-algo-gradient-yellow-2-dark">
              {' '}
              AlgoArchive
            </span>
          </h1>
          <p className="mb-8 text-lg text-label dark:text-label-dark">
            Easily sync your LeetCode solutions with GitHub and showcase your programming journey.
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              href="/waitlist"
              as={Link}
              target="_blank"
              showAnchorIcon
              variant="ghost"
              className="rounded-full bg-gradient-to-r px-6 py-2 
                from-algo-gradient-yellow-1 to-algo-gradient-yellow-2 
                dark:from-algo-gradient-yellow-1-dark dark:to-algo-gradient-yellow-2-dark
                text-heading-dark hover:text-heading"
            >
              Join the waitlist
            </Button>
            {/* <Button
              href="#"
              as={Link}
              variant="solid"
              className="bg-[#825534] text-white px-6 py-2 rounded-full"
            >
              Login
            </Button> */}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
