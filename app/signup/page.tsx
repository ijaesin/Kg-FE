'use client';

import { useState, useCallback } from 'react';
import { Input, Button } from '@nextui-org/react';
import { IconEyeOpen, IconEyeClosed } from '@/public/svgs';
import { postSendVerification, postVerifyEmail } from '@/api/auth';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SignUpForm } from '@/types/auth';

export default function Signup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleCheck, setIsVisibleCheck] = useState(false);
  const [isVerification, setIsVerification] = useState(false);
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const { register, handleSubmit, watch } = useForm();

  const toggleSwitch = useCallback(() => {
    setIsVisible(!isVisible);
  }, [isVisible]);

  const toggleSwitchCheck = useCallback(() => {
    setIsVisibleCheck(!isVisibleCheck);
  }, [isVisibleCheck]);

  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    [],
  );

  const onSubmitEmail = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setIsVerification(true);
      postSendVerification({ email });
    },
    [email],
  );

  const onChangeCode = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setVerificationCode(e.target.value);
  }, []);

  const onSubmitCode = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      postVerifyEmail({ email, verificationCode });
    },
    [email, verificationCode],
  );

  const onSubmitSignUp: SubmitHandler<SignUpForm> = useCallback((data) => {
    // console.log(data);
  }, []);

  return (
    <section className="flex flex-col items-center gap-8 my-10 ">
      <h2 className="text-xl font-semibold">이메일 간편가입</h2>

      <form
        className="flex flex-col gap-8"
        onSubmit={handleSubmit(onSubmitSignUp)}
      >
        <div className="flex flex-col gap-4 w-[480px]">
          <h3 className="font-semibold text-inactive">이메일</h3>
          <div className="flex flex-col gap-2">
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder="이메일 입력"
                classNames={{
                  inputWrapper: ['bg-component'],
                }}
                value={email}
                onChange={onChangeEmail}
              />

              <Button
                className="w-[120px] bg-themeBlue/20 border-themeBlue text-inactive h-14"
                onClick={onSubmitEmail}
                isDisabled={isVerification}
              >
                인증번호 전송
              </Button>
            </div>

            {isVerification && (
              <div className="flex gap-4">
                <Input
                  type="string"
                  placeholder="인증번호 입력"
                  classNames={{
                    inputWrapper: ['bg-component'],
                  }}
                  onChange={onChangeCode}
                />

                <Button
                  className="w-[120px] bg-themeBlue/20 border-themeBlue text-inactive h-14"
                  onClick={onSubmitCode}
                >
                  인증하기
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4 w-[480px]">
          <h3 className="font-semibold text-inactive">이름</h3>
          <Input
            type="text"
            placeholder="이름 입력"
            classNames={{
              inputWrapper: ['bg-component'],
              input: ['bg-component', 'focus:bg-component'],
            }}
            {...register('userName', { required: true })}
          />
        </div>

        <div className="flex flex-col gap-4 w-[480px]">
          <h3 className="font-semibold text-inactive">닉네임</h3>
          <Input
            type="text"
            placeholder="닉네임 입력"
            classNames={{
              inputWrapper: ['bg-component'],
            }}
            {...register('nickname', { required: true })}
          />
        </div>

        <div className="flex flex-col gap-4 w-[480px]">
          <h3 className="font-semibold text-inactive">비밀번호</h3>
          <div className="flex flex-col gap-3">
            <Input
              type={isVisible ? 'string' : 'password'}
              placeholder="비밀번호 입력"
              classNames={{
                inputWrapper: ['bg-component'],
              }}
              endContent={
                <Button
                  isIconOnly
                  className="bg-transparent"
                  onClick={toggleSwitch}
                >
                  {isVisible ? <IconEyeClosed /> : <IconEyeOpen password />}
                </Button>
              }
              {...register('password', { required: true })}
            />
            <Input
              type={isVisibleCheck ? 'string' : 'password'}
              placeholder="비밀번호 확인"
              classNames={{
                inputWrapper: ['bg-component'],
              }}
              endContent={
                <Button
                  isIconOnly
                  className="bg-transparent"
                  onClick={toggleSwitchCheck}
                >
                  {isVisibleCheck ? (
                    <IconEyeClosed />
                  ) : (
                    <IconEyeOpen password />
                  )}
                </Button>
              }
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-[480px] bg-themeBlue/20 border-themeBlue text-inactive h-14"
        >
          가입 완료하기
        </Button>
      </form>
    </section>
  );
}
