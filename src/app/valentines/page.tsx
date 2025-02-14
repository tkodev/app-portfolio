'use client'

import { Binary, Code, Coffee, Heart, Pizza, ThumbsUp, X } from 'lucide-react'
import React, { useState } from 'react'
import { Bg } from '@/components/atoms/bg'
import { Button } from '@/components/atoms/button'
import { Main } from '@/components/organisms/main'
import { Section } from '@/components/organisms/section'
import { Alert, AlertDescription } from '@/components/temp/alert'
import { Card } from '@/components/temp/card'
import { cn } from '@/utils/theme'

const FunnyValentine = () => {
  const [rejected, setRejected] = useState(false)
  const [attemptCount, setAttemptCount] = useState(0)
  const [showSuccess, setShowSuccess] = useState(false)
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 })

  const funnyMessages = [
    "Are you a JavaScript Promise? Because I'm awaiting your response...",
    'Are you CSS? Because without you, my life has no style',
    "Is your name Wi-Fi? Because I'm really feeling a connection",
    "You must be HTML, because you've got some nice tags",
    "Are you a computer? Because you're turning my software into hardware",
    "Are you a keyboard? Because you're just my type",
    "Are you HTTP? Because without you I'm just ://",
    "Are you a full-stack developer? Because you've got both front-end and back-end",
    "Is your name Google? Because you've got everything I've been searching for",
    "Is your name Semicolon? Because this won't work without you ;)",
    'Roses are #FF0000, Violets are #0000FF, All my console.log() statements are about you',
    'Are you React? Because I want to hook up with you',
    "Are you Docker? Because you're containerizing all my feelings",
    "Are you my DNS? Because without you, I'm totally lost",
    "My love for you has no bugs, it's been tested in production",
    "Are you a try-catch block? Because I'm falling for you",
    'Even with dark mode on, you still light up my world',
    'You must be TCP because I want a connection that lasts'
  ]

  const [currentMessage, setCurrentMessage] = useState(funnyMessages[0])

  const handleMouseEnter = () => {
    if (attemptCount < 15) {
      const newX = Math.random() * 200 - 100
      const newY = Math.random() * 200 - 100
      setButtonPosition({ x: newX, y: newY })
      setAttemptCount((prev) => prev + 1)
    }
  }

  const handleReject = () => {
    handleMouseEnter()
    if (attemptCount >= 7) {
      setRejected(true)
      setTimeout(() => setRejected(false), 2000)
    }
  }

  const handleAccept = () => {
    setShowSuccess(true)
    setAttemptCount(0)
    setButtonPosition({ x: 0, y: 0 })
    setTimeout(() => {
      setShowSuccess(false)
      setCurrentMessage(funnyMessages[Math.floor(Math.random() * funnyMessages.length)])
    }, 2000)
  }

  return (
    <Main>
      <Section
        className={cn('flex items-center justify-center')}
        bg={<Bg attach="local" position="top" size="repeat" variant="texture" />}
        height="full"
      >
        <div className="mx-auto max-w-md p-8">
          <Card className="relative overflow-hidden bg-gradient-to-r from-pink-100 to-red-100 p-6">
            <div className="absolute right-2 top-2 space-x-2">
              <Coffee className="text-brown-500 inline-block" size={20} />
              <Pizza className="inline-block text-yellow-600" size={20} />
              <Code className="inline-block text-blue-500" size={20} />
            </div>

            <div className="space-y-8 text-center">
              <h2 className="text-2xl mt-4 font-bold text-pink-600">
                {rejected ? 'ERROR 💔' : 'Will you be my type-safe Valentine?'}
              </h2>

              <div className="relative flex items-center justify-center">
                <div className="rounded-lg bg-white bg-opacity-60 p-4 text-lg font-medium text-gray-700">
                  {currentMessage}
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <Button
                    className="bg-green-500 transition-all hover:bg-green-600"
                    onClick={handleAccept}
                  >
                    <ThumbsUp className="mr-2 h-4 w-4" />
                    Yes, obviously!
                  </Button>
                </div>

                <div className="relative">
                  <Button
                    className="bg-red-500 transition-transform hover:bg-red-600"
                    onClick={handleReject}
                    onMouseEnter={handleMouseEnter}
                    style={{
                      transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px)`,
                      transition: 'transform 0.2s ease-out'
                    }}
                  >
                    <X className="mr-2 h-4 w-4" />
                    No way
                  </Button>
                </div>
              </div>

              {rejected && (
                <Alert className="mt-4 border-red-200 bg-red-100">
                  <AlertDescription className="text-red-800">
                    404: Response not accepted. Please try again! 😅
                  </AlertDescription>
                </Alert>
              )}

              {showSuccess && (
                <Alert className="mt-4 border-green-200 bg-green-100">
                  <AlertDescription className="text-green-800">
                    Great choice! Now let&apos;s git commit to this relationship! 🎉
                  </AlertDescription>
                </Alert>
              )}

              {attemptCount >= 3 && (
                <Alert className="mt-4 border-yellow-200 bg-yellow-100">
                  <AlertDescription className="text-yellow-800">
                    Come on, stop trying to resist! You know you want to say yes! 😏
                  </AlertDescription>
                </Alert>
              )}

              <div className="flex justify-center space-x-2">
                <Binary className="text-pink-500" size={20} />
                <Heart className="text-red-500" fill="currentColor" size={20} />
                <Code className="text-pink-500" size={20} />
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </Main>
  )
}

export default FunnyValentine
